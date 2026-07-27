# Deploying to cPanel (Node.js App)

This project is a TanStack Start app that runs as a Node.js server. cPanel's
**Setup Node.js App** feature (Passenger-based) can host it directly.

## 1. Build locally

```bash
bun install
bun run build
```

The build produces a standalone Node server at:

```
.output/
  server/index.mjs      ← app entry point
  public/               ← static assets (served by the Node server)
```

The Nitro preset is set to `node-server` in `vite.config.ts`. You can override
at build time: `NITRO_PRESET=node-cluster bun run build`.

## 2. Upload to cPanel

Upload the entire `.output/` folder to your hosting account, e.g.
`/home/<user>/kenyan-sports-blog/`. You can zip it, upload via File Manager,
and extract on the server. `node_modules` is **not** needed — Nitro bundles
all dependencies into `.output/server/`.

## 3. Create the Node.js App in cPanel

1. Open **cPanel → Setup Node.js App → Create Application**.
2. **Node.js version:** 20.x or 22.x (LTS).
3. **Application mode:** Production.
4. **Application root:** `kenyan-sports-blog` (folder you uploaded to).
5. **Application URL:** your domain or subdomain.
6. **Application startup file:** `.output/server/index.mjs`
7. Leave **Passenger log file** at the default.
8. Click **Create**.

## 4. Environment variables

If you add any secrets later (API keys, database URLs), add them in the
**Environment variables** section of the Node.js App page, then click
**Restart**.

Default port: cPanel/Passenger injects `PORT` automatically — no config
needed. If running elsewhere, `PORT=3000 node .output/server/index.mjs`.

## 5. Start / Restart

Use the **Restart** button on the Node.js App page after any upload.

## Notes / limits

- cPanel Node apps run behind Passenger, which supports standard Node HTTP
  servers. The `node-server` Nitro preset outputs exactly that.
- No websockets required for this site.
- If your host does **not** offer Node.js Selector, this app cannot run
  there — cPanel-only static hosting would need an SSG export instead
  (ask and I can add that).
