# Angular TypeScript Migration

This repository now uses TypeScript while keeping Angular as the framework.

## What changed

- Replaced JavaScript entrypoint patterns with `src/main.ts`.
- Added a typed Angular component (`AppComponent`) with a strict `Task` interface.
- Enabled strict TypeScript compiler settings in `tsconfig.json`.

## Run

```bash
npm install
npm start
```
