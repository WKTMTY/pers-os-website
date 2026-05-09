---
name: use-skill
description: Routes the agent to the correct vault skill file by domain and runs supports_query to list child notes from Supports frontmatter. Use at session start or when the user invokes Use Skill, skill routing, supports_query, or vault child discovery.
---

# Use Skill

## Router map (vault skill files)

Pick the **vault skill file** that matches the user’s domain, open it, then follow **Workflow** below.

### Which skill file to open


- When the work is humor, jokes, puns, or choosing dark vs light comedic tone: [Tell joke.md](C:\Users\willb\My Drive\@PersonalAI\Tell joke.md)
- When the work is to interact with Skills or Skill related artefacts (Guides, References, etc.): [Managing AI Skills.md](C:\Users\willb\My Drive\@PersonalAI\Managing AI Skills.md)
- When the work is reflection on feature, analysis, or about creating new features or PRDs :  [[How to grill me for a PRD]](C:\Users\willb\My Drive\@PersonalAI\How to grill me for a PRD.md)



(Add more rows here as you add router skill files in the vault.)

## Workflow

1. **Read** the **vault skill file** you matched in the router map. Let **current** be that note’s filename stem (the part before `.md`).
2. **Do not** grep or hand-scan `Supports:`. Parents don’t enumerate every child—always use the script (see **Child discovery**).
3. **Run** `supports_query` on the vault directory with `--parent` = **current**. Use the **same** command shape every time; only **current** changes.
4. **If the script returns no child rows:** open the note for **current**, **follow its Instructions** (if any), and open wikilinks only when a step says to. **Stop.**
5. **If the script returns child rows:** decide whether **current** is already the vault note you should **execute** for this request (e.g. the right **Guide** for the user’s intent—even if the script still lists Reference children under that parent).  
   - **If yes:** **follow** **Instructions** in **current**; open linked notes only when those steps say to. **Stop.**  
   - **If no:** open the child rows, pick the **one** that continues routing, set **current** to that note’s stem, and **go back to step 3**.

Steps 3–5 are the **discovery loop**: **rerun** the script after every change to **current**, until the script reports **no children** (step 4) or you **stop at the executable note** (step 5). Do not skip a run just because you assume the tree shape.

## Child discovery: `supports_query`

List notes in a vault directory whose `Supports` frontmatter lists a parent by **running the script** (do not hand-enumerate large trees).

**Path (from repo root):** `.cursor/skills/use-skill/scripts/supports_query.py`

```bash
python .cursor/skills/use-skill/scripts/supports_query.py "<VAULT_DIR>" --parent "<PARENT_STEM>"
python .cursor/skills/use-skill/scripts/supports_query.py "<VAULT_DIR>" --json
```

**Progressive disclosure:** one child hop per loop; always re-run the script after changing **current**.

## personal-os-dev: where to save design-plan Markdown files

When the task is producing a **new design plan** for this workspace, save the Markdown file under:

**`delivery/tasks/design-plan-<short-slug>-YYYYMMDD.md`**

Example: `delivery/tasks/design-plan-clarify-widget-performance-20260428.md`.

Use **`delivery/archives/`** only when **moving** completed or superseded plans out of tasks (explicit archive), not as the default drop location for active plans.

##  a note on testing

When implementing a plan or developing code, do NOT create  or run any unit tests. 