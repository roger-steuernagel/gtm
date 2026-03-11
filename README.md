# Angular + PO UI Frontend

This repository now uses **PO UI** as the frontend component framework on top of Angular.

## What changed

- Added PO UI dependencies and theme/icon styles.
- Refactored `AppComponent` to use PO UI building blocks (`po-widget`, `po-button`, `po-tag`, `po-list-view`, `po-divider`).
- Replaced browser `alert` notifications with `PoNotificationService`.
- Enabled Angular animations provider required by PO UI.

## Run

```bash
npm install
npm start
```
