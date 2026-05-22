# Testing

## Unit Tests

Run unit tests with:

```sh
npm run test
```

Run coverage with:

```sh
npm run test:coverage
```

## Full Verification

Before finalizing a task or publishing a package, run:

```sh
npm run check
```

This command runs type checking, linting, formatting checks, tests, the build,
and package validation.

## Package Validation

`npm run package:check` verifies the package contents with `npm pack --dry-run`
and checks the published package shape with `publint`.
