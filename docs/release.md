# Release

## Publishing Model

This repository is configured for npm publishing through GitHub Actions and npm Trusted Publishing with OIDC. This
avoids storing a long-lived npm token in GitHub secrets.

## npm Trusted Publishing Setup

Before the first release:

1. Ensure the GitHub repository is public or otherwise supported by npm Trusted Publishing.
2. Ensure `package.json` has the correct `repository.url`.
3. Create or claim the package on npm.
4. In npm package settings, add a trusted publisher for this GitHub repository and the release workflow.

## Release Flow

1. Update the package version.
2. Run `npm run check`.
3. Commit the version change.
4. Create a GitHub Release.
5. Push a version tag such as `v1.1.1`.
6. The publish workflow starts from the tag push.

The real `npm publish` command is currently commented out so the workflow can be validated safely. It logs the tag that
would be published. Uncomment `npm publish` in `.github/workflows/publish.yml` after the workflow is verified.

The package has `publishConfig.provenance=true` so npm can publish provenance attestations for supported releases.
