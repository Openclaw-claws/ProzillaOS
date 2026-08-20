# AGENTS.md — generado desde CLAUDE.md (fuente canónica). NO editar a mano.
<!-- SYNCED:brain sha=e45115b -->
# ProzillaOS — Fork rebrandeado "BotSquadron" (escritorio-OS en el browser)

Copia de **prozilla-os/ProzillaOS**: un "sistema operativo" web — escritorio con ventanas,
terminal y apps, todo React corriendo en el navegador. Alan lo rebrandeó como **BotSquadron**
(3 commits propios, abr-2026).

## Estado
Fork con mods propias de BRANDING (dormido desde abr-2026):
- `demo/index.html` — título y meta a BotSquadron
- `demo/public/assets/logo.svg` — logo propio
- `demo/src/config/branding.config.ts` — nombre y tagline
- `packages/core/src/styles/global/variables.css` — tema/colores
Finalidad exacta del rebrand: por documentar (hipótesis: fachada visual para el fleet
de squadrons de bots — ver `~/.openclaw/vault/SQUADRONS.md`).

## Comandos
Monorepo pnpm (usa `pnpm`, bloquea npm):
- `pnpm start` o `pnpm demo:start` — levanta la demo (el "OS")
- `pnpm demo:build` / `demo:preview` — build y preview de la demo
- `pnpm build` — build de todos los paquetes · `pnpm test`

## Gotchas
- `preinstall` fuerza pnpm (`only-allow pnpm`): npm install falla a propósito.
- El branding vive en 4 puntos (arriba); tocar solo uno deja el sitio a medias.
- `predeploy` borra `dist/` antes de staging.

## Ecosistema
- Upstream: github.com/prozilla-os/ProzillaOS (demo oficial: os.prozilla.dev).
- Fork bajo `Openclaw-claws/ProzillaOS`.
<!-- /SYNCED:brain -->
