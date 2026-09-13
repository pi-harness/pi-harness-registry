# AGENTS.md

## Scope

This repository is the discoverable plugin catalog for Pi Harness. It contains metadata and validation for npm packages; plugin runtime source belongs in `pi-harness/pi-harness-plugins`.

## Files

- `plugins.json`: canonical catalog index.
- `schema.json`: JSON Schema for catalog entries.
- `README.md`: catalog usage and contribution guidance.

## Validation

Run `npm ci` when a lockfile is present. Validate the catalog with the repository GitHub Actions workflow or the equivalent Node.js schema and invariant checks. Every entry must use an `@pi-harness/plugin-*` package name, a valid semver version, and a public repository URL.

## Updates

Update entries only after the corresponding npm package is published. Keep the catalog deterministic and sorted. Do not put plugin source code in this repository.
