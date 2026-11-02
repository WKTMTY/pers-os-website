---
name: developing-clean-architecture
description: Open the Developing Clean Architecture Solution vault note and follow the child Guide for the layer being built.
disable-model-invocation: true
---

# Developing Clean Architecture Solution

Open the vault Skill note `Developing Clean Architecture Solution.md`, then follow the one child Guide that matches the request.

## Vault root

Stop at the first directory that exists.

1. `<personal-ai-brain checkout>/Personal AI/`
   The checkout is the workspace directory that contains both `Personal AI/` and `.cursor/skills/supports_query.py`.
2. Only if that folder is absent:
   - Cursor `Read` / `Glob`: `c:\Users\willb\My Drive\@PersonalAI\`
   - Shell: `/mnt/c/Users/willb/My Drive/@PersonalAI`

`@PersonalAI/` in a wikilink is the library name. It is not a folder inside `Personal AI/`.

## Read the Skill

`Read` `<vault root>/Developing Clean Architecture Solution.md`.

## Child Guides

Do not hand-scan `Supports`. If the Skill note names a Guide, follow that Guide.

Otherwise run this once, with the vault root you resolved. Use `python3` when `python` is not on PATH.

```bash
python "<personal-ai-brain checkout>/.cursor/skills/supports_query.py" "<vault root>" --parent "Developing Clean Architecture Solution"
```

If the checkout, and so the script, is absent, say discovery cannot run and stop.

Printed rows include `Class`. Follow the one row whose `Class` is `[[Guide]]` and whose name matches the request. `Read` `<vault root>/<that name>.md` and follow its Instructions.

If no Guide matches, stop and say so. Do not invent the procedure.

Opening a wikilink the executing Guide tells you to read is part of that Guide. It is not a second discovery run.

## Wikilinks

- `[[@PersonalAI/sub/Foo.md|Foo]]` → `<vault root>/sub/Foo.md`. Replace the `@PersonalAI/` prefix with the vault root.
- `[[Foo]]` → `Glob` `**/Foo.md` under the vault root, then `Read` it.
