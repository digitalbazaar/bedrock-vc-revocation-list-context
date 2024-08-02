# bedrock-vc-revocation-list-context ChangeLog

## 6.0.0 - 2024-08-01

### Changed
- **BREAKING**: Update peer deps:
  - `@bedrock/jsonld-document-loader@5.1.0`.
- Remove `@bedrock/core` peer dep.

### Fixed
- Add package `files` field.

## 4.0.0 - 2023-09-19

### Changed
- **BREAKING**: Drop support for Node.js < 18.
- Use `@bedrock/jsonld-document-loader@4`.

## 3.1.0 - 2022-06-08

### Changed
- Export constants.

## 3.0.0 - 2022-04-29

### Changed
- **BREAKING**: Update peer deps:
  - `@bedrock/core@6`
  - `@bedrock/jsonld-document-loader@3`.

## 2.0.0 - 2022-04-03

### Changed
- **BREAKING**: Rename package to `@bedrock/vc-revocation-list-context`.
- **BREAKING**: Convert to module (ESM).
- **BREAKING**: Remove default export.
- **BREAKING**: Require node 14.x.

### Removed
- **BREAKING**: Remove adding any constants to bedrock config system. If
  constants are needed, import them from `constants`.

## 1.1.0 - 2022-03-28

### Changed
- Update peer deps:
  - `bedrock@4.5`
  - `bedrock-jsonld-document-loader@1.3`.
- Update internals to use esm style and use `esm.js` to
  transpile to CommonJS.

## 1.0.0 - 2020-04-22

- See git history for changes.
