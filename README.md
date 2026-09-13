# Pi Harness Registry

[![CI](https://github.com/pi-harness/pi-harness-registry/actions/workflows/validate.yml/badge.svg)](https://github.com/pi-harness/pi-harness-registry/actions/workflows/validate.yml)

The public catalog of published Pi Harness plugins. This repository contains metadata only; plugin source lives in [pi-harness-plugins](https://github.com/pi-harness/pi-harness-plugins), and the runtime lives in [pi-harness](https://github.com/pi-harness/pi-harness).

## Catalog

The canonical index is [`plugins.json`](plugins.json). It records each package name, published npm version, source repository, source path, and description. The current schema is documented in [`SCHEMA.md`](SCHEMA.md) and machine-validated by [`schema.json`](schema.json).

## Consumers

A client can fetch the raw catalog from:

```text
https://raw.githubusercontent.com/pi-harness/pi-harness/main/plugins.json
```

For a stable pinned revision, use the `pi-harness-registry` commit URL. Clients should validate `schemaVersion`, accept unknown future fields, and treat npm metadata as the source of truth for installation.

## Updating entries

Only add a plugin after its npm publication succeeds. Copy the exact `latest` version, verify the package name and repository URL, keep entries deterministic, and run the validation workflow. See [`UPDATING.md`](UPDATING.md) for the release checklist.

## Contributing

Read [`AGENTS.md`](AGENTS.md), [`SCHEMA.md`](SCHEMA.md), and [`UPDATING.md`](UPDATING.md) before editing. Registry changes should be metadata-only and include the corresponding plugin release or correction rationale.
