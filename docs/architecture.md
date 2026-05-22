# Architecture

## Package Shape

The package is a TypeScript library that builds from `src/index.ts` into `dist/`.

The published package supports both ESM and CommonJS consumers:

- ESM entry: `dist/index.js`
- CommonJS entry: `dist/index.cjs`
- Type declarations: `dist/index.d.ts`

The package `exports` map points consumers to the correct entry for each module system.

## Build Tool

`tsup` compiles the source, emits source maps, and generates declaration files. The TypeScript compiler is still used
for strict type checking through `npm run typecheck`.

## Runtime Dependencies

The boilerplate starts with no runtime dependencies. Add runtime dependencies only when the library API needs them.
