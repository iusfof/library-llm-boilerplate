# Release

## Publishing Model

This repository is configured for npm publishing through GitHub Actions and npm
Trusted Publishing with OIDC. This avoids storing a long-lived npm token in
GitHub secrets.

## npm Trusted Publishing Setup

Before the first release:

1. Ensure the GitHub repository is public or otherwise supported by npm Trusted
   Publishing.
2. Ensure `package.json` has the correct `repository.url`.
3. Create or claim the package on npm.
4. In npm package settings, add a trusted publisher for this GitHub repository
   and the release workflow.

## Release Flow

1. Update the package version.
2. Run `npm run check`.
3. Commit the version change.
4. Create a GitHub Release.
5. The publish workflow runs `npm publish` with provenance enabled.

The package has `publishConfig.provenance=true` so npm can publish provenance
attestations for supported releases.
