#!/usr/bin/env python3
"""
List Class / Supports wikilinks from markdown files by parsing frontmatter only (first
~16 KiB of each file). No third-party dependencies.

Speed: In-process scan of a modest directory can be single-digit to low tens of ms; the first
`python ...` run also pays interpreter startup (often 20–100+ ms) — use `--bench` to see
one cold timing plus a warmed loop. Sub-10 ms for the scan body alone is realistic when the
folder has few to a few hundred small notes and the OS cache is warm.

Usage (from AgenticDev repo root):
  python .cursor/skills/use-skill/scripts/supports_query.py [DIR] [--parent "…"] [--json] [--bench]

Examples:
  python .cursor/skills/use-skill/scripts/supports_query.py "C:/path/to/skill-vault"
  python .cursor/skills/use-skill/scripts/supports_query.py . --parent "[[01 Pass Pre-Dev Stage]]"
  python .cursor/skills/use-skill/scripts/supports_query.py . --parent "200 days at the gym" --json
  python .cursor/skills/use-skill/scripts/supports_query.py . --bench
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from pathlib import Path

# Read at most this many bytes when hunting for the closing ---; frontmatter for skills
# should stay tiny (only Class + Supports + a few lines).
_MAX_HEAD = 16 * 1024

# Lines like:  - "[[Some Page]]"  (indent + dash + quoted wikilink)
_WIKI_ITEM = re.compile(r"^\s*-\s*\"(\[\[.+?\]\])\"\s*(?:#.*)?$")
# One-line: Class: "[[Skill]]"
_CLASS_LINE = re.compile(
    r"^Class:\s*\"(\[\[.+?\]\])\"\s*(?:#.*)?$", re.IGNORECASE
)
# Class: "[[X]]" could use single quotes in theory — keep to double quotes (your convention)


def _read_head(path: Path) -> str:
    with path.open("r", encoding="utf-8", errors="replace", newline="") as f:
        return f.read(_MAX_HEAD)


def extract_frontmatter(text: str) -> str | None:
    """Return YAML between first and second '---' line, or None if missing/truncated."""
    if not text.startswith("---"):
        return None
    lines = text.splitlines(keepends=True)
    if not lines or lines[0].strip() != "---":
        return None
    acc: list[str] = []
    for line in lines[1:]:
        if line.strip() == "---":
            return "".join(acc).rstrip("\r\n")
        acc.append(line)
    return None


def parse_supports_and_class(fm: str) -> tuple[str | None, list[str]]:
    """Parse Class: and list items under Supports: from a frontmatter string."""
    cls: str | None = None
    supports: list[str] = []
    in_supports = False
    for line in fm.splitlines():
        s = line.rstrip()
        m_cls = _CLASS_LINE.match(s)
        if m_cls:
            cls = m_cls.group(1)
            in_supports = False
            continue
        if s.strip().lower().startswith("supports:"):
            in_supports = True
            continue
        if in_supports:
            m = _WIKI_ITEM.match(s)
            if m:
                supports.append(m.group(1))
                continue
            # end of list: next top-level key (not indented or empty in broken YAML)
            if s and not s[0].isspace():
                in_supports = False
    return cls, supports


def normalize_parent_token(token: str) -> str:
    t = token.strip()
    if t.startswith("[[") and t.endswith("]]"):
        return t[2:-2].strip()
    return t


def parent_matches(
    wikis: list[str], parent: str, inner: str, inner_lower: str
) -> bool:
    """True if this note lists the parent in Supports."""
    for w in wikis:
        inner_w = w[2:-2].strip() if w.startswith("[[") and w.endswith("]]") else w
        if w == parent:
            return True
        if inner_w == inner:
            return True
        if inner_w.lower() == inner_lower:
            return True
    return False


def scan_dir(
    root: Path, parent_filter: str | None
) -> list[dict[str, str | list[str] | None]]:
    root = root.resolve()
    out: list[dict[str, str | list[str] | None]] = []
    parent = parent_filter.strip() if parent_filter else None
    inner = normalize_parent_token(parent) if parent else ""
    inner_lower = inner.lower() if parent else ""
    for path in sorted(root.glob("*.md")):
        if not path.is_file():
            continue
        try:
            head = _read_head(path)
        except OSError as e:
            print(f"skip {path}: {e}", file=sys.stderr)
            continue
        fm = extract_frontmatter(head)
        if fm is None:
            continue
        cls, supports = parse_supports_and_class(fm)
        if parent and not parent_matches(
            supports, parent, inner, inner_lower
        ):
            continue
        out.append(
            {
                "file": str(path),
                "name": path.stem,
                "Class": cls,
                "Supports": supports,
            }
        )
    return out


def main() -> int:
    ap = argparse.ArgumentParser(
        description="Scan .md frontmatters for Class and Supports wikilinks (fast, head read only)."
    )
    ap.add_argument(
        "dir",
        nargs="?",
        default=".",
        type=Path,
        help="Directory of *.md files (default: .)",
    )
    ap.add_argument(
        "--parent",
        type=str,
        help='Only list notes whose Supports list includes this wikilink (e.g. "[[Parent]]" or Parent title).',
    )
    ap.add_argument("--json", action="store_true", help="Print JSON lines")
    ap.add_argument(
        "--bench",
        action="store_true",
        help="Time one scan and run 256 in-process warm iterations (stderr); still prints normal output",
    )
    ap.add_argument(
        "--bench-iters",
        type=int,
        default=256,
        metavar="N",
        help="Warm iterations for --bench (default: 256)",
    )
    args = ap.parse_args()
    d: Path = args.dir
    if not d.is_dir():
        print(f"Not a directory: {d}", file=sys.stderr)
        return 1
    t0 = time.perf_counter()
    rows = scan_dir(d, args.parent)
    cold_ms = (time.perf_counter() - t0) * 1000.0
    if args.bench:
        warm = args.bench_iters
        t_min = 1e9
        t_sum = 0.0
        for _ in range(warm):
            t1 = time.perf_counter()
            _ = scan_dir(d, args.parent)
            dt = (time.perf_counter() - t1) * 1000.0
            t_min = min(t_min, dt)
            t_sum += dt
        print(
            f"md_files_in_dir~={len(list(d.glob('*.md')))}  "
            f"rows_matched={len(rows)}  "
            f"cold_ms={cold_ms:.3f}  "
            f"warm_n={warm}  "
            f"warm_min_ms={t_min:.3f}  "
            f"warm_avg_ms={t_sum / warm:.3f}",
            file=sys.stderr,
        )
        if args.json:
            print(
                json.dumps(
                    {
                        "cold_ms": cold_ms,
                        "warm_min_ms": t_min,
                        "warm_avg_ms": t_sum / warm,
                        "warm_n": warm,
                        "count": len(rows),
                        "rows": rows,
                    },
                    indent=2,
                )
            )
            return 0
    if args.json:
        print(json.dumps(rows, indent=2, ensure_ascii=False))
        return 0
    for r in rows:
        c = r.get("Class") or ""
        s = r.get("Supports") or []
        sup = ", ".join(s) if s else "—"
        print(f"{r['name']}\tClass: {c}\tSupports: {sup}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
