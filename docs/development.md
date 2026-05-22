# Development

## Requirements

- Node.js `>=20`
- npm `>=10`

## Install

```sh
npm install
```

The repository uses `.npmrc` with `save-exact=true`. All dependencies must be recorded with exact versions in
`package.json`.

When adding a dependency, use:

```sh
npm install --save-exact <package>
npm install --save-dev --save-exact <package>
```

Do not commit dependency versions with `^` or `~` ranges.

## Workflow

Create a separate branch for each task, run the relevant checks, and commit small logical changes after verification.

Pre-commit checks are managed by Husky and lint-staged. The pre-commit hook runs linters and Prettier only for staged
files.

Use npm scripts as the source of truth:

```sh
npm run typecheck
npm run lint
npm run format:check
npm run test
npm run build
npm run package:check
npm run check
```

Do not edit generated `dist/` files manually.
