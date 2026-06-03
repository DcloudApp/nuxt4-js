# Copilot Instructions

This repository is a Nuxt 4 starter template for `DcloudApp/nuxt4-js`.

Follow `AGENTS.md` first. Keep the template business-free, lightweight, and suitable for `degit`.

Key rules:

- Do not add demo business features such as counters, timers, todos, dashboards, auth pages, or mock APIs.
- Do not add Pinia by default.
- Do not add PWA by default.
- Do not add PM2 or non-Docker production deployment files.
- Do not set `package.json.name` to the local folder name.
- Keep route pages thin and move feature code into `app/features/<feature>/`.
- Put app shell components in `app/components/app/`.
- Put reusable base UI in `app/components/base/`.
- Use Vue 3 Composition API with `<script setup>`.
- Use pnpm catalogs in `pnpm-workspace.yaml` for dependency versions.

Validate changes with:

```bash
pnpm check
```

or run separately:

```bash
pnpm lint
pnpm build
```
