# Agent Instructions

These instructions apply to the whole repository.

## Language

- Write all documentation in English, regardless of the language used by the user.
- Keep commit messages, code comments, release notes, and docs clear and concise.

## Dependency Policy

- Always use exact dependency versions.
- Do not add semver ranges such as `^` or `~` to `package.json`.
- Keep `save-exact=true` in `.npmrc`.
- Use `npm install --save-exact` when adding or updating dependencies.

## Branch And Commit Workflow

- Create a separate branch for every task.
- Name each branch after the upcoming work.
- Run the relevant tests and checks before committing.
- After verification, commit changes to the task branch without asking for additional confirmation.
- Keep commits small, logical, and reviewable.
- Preserve user changes. Do not revert unrelated edits unless the user explicitly asks for it.

## Documentation Logs

- Store summaries of task discussions with the user in `docs/logs/`.
- Store summaries of decisions made by the agent in `docs/decisions/`.
- Name log and decision files with this pattern:

```text
[YYYY-MM-DD HH:mm UTC]-[CURRENT_BRANCH_NAME].md
```

- If a branch name contains path separators, replace them by "_".
- Decision files must use this template:

```md
- Context:
- Decision:
- Consequences:
- Status: proposed | accepted | superseded
```

## Project Commands

- Use npm scripts as the source of truth.
- Run `npm run check` before publishing or finalizing broad changes.
- Do not edit generated `dist/` files manually.
- Verify the work before reporting completion.
