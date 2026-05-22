# library-llm-boilerplate

A strict TypeScript library boilerplate for npm packages built with LLM agents.

## Features

- TypeScript library source in `src/`.
- Dual ESM and CommonJS package output.
- Generated declaration files.
- Vitest tests and coverage.
- ESLint and Prettier checks.
- npm package validation with `npm pack --dry-run` and `publint`.
- GitHub Actions CI and npm Trusted Publishing release workflow.

## Commands

```sh
npm run typecheck
npm run lint
npm run format:check
npm run test
npm run build
npm run package:check
npm run check
```

## Package Entry

```ts
import { createGreeting } from 'pet__library-llm-boilerplate';

console.log(createGreeting('Agent'));
```

## Documentation

Project documentation lives in `docs/`.
