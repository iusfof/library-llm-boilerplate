# Continuous Integration

## Pull Requests

The CI workflow runs on pull requests targeting `main` and on pushes to `main`. It installs dependencies with `npm ci`
and runs `npm run check` on Node.js 20, 22, and 24.

To prevent merging when tests or linters fail, configure the repository's `main` branch protection or ruleset in GitHub
to require the CI status checks:

- `Node 20`
- `Node 22`
- `Node 24`

GitHub branch protection is repository settings state, not a workflow file. The workflow provides the required status
checks; the repository settings must mark them as required.

## Version Tag Publishing

The publish workflow runs when a tag matching `v*.*.*` is pushed, for example `v1.1.1`.

The real `npm publish` command is intentionally commented out for validation. The workflow currently logs the tag name
and explains where publishing would run. After validating the workflow, uncomment `npm publish` in
`.github/workflows/publish.yml`.

The workflow keeps `id-token: write` permission so npm Trusted Publishing can be used when publication is enabled.
