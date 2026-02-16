# Fullstack Recipes App

This is a **Next.js 16+** application bootstrapped with `create-next-app` and configured according to [fullstackrecipes.com](https://fullstackrecipes.com) best practices.

## Features

- **Framework**: [Next.js 16+](https://nextjs.org) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org) (Strict)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + [Shadcn UI](https://ui.shadcn.com)
- **Database**: [Neon Postgres](https://neon.tech) + [Drizzle ORM](https://orm.drizzle.team)
- **Auth**: [Better-Auth](https://better-auth.com) (Email/Password)
- **Email**: [Resend](https://resend.com) + [React Email](https://react.email)
- **Runtime**: [Bun](https://bun.sh)

## Getting Started

1. **Install Dependencies**:

   ```bash
   bun install
   ```

2. **Configure Environment**:
   Copy `.env.example` to `.env` and fill in your credentials:

   ```bash
   cp .env.example .env
   ```

   - `DATABASE_URL`: From your Neon dashboard.
   - `BETTER_AUTH_SECRET`: Generated securely.
   - `RESEND_API_KEY`: From your Resend dashboard.

3. **Database Migration**:
   Running migrations locally requires the `DATABASE_URL` to be present in `.env`.

   ```bash
   bun run db:migrate
   ```

4. **Start Development Server**:
   ```bash
   bun dev
   ```

## Development Scripts

- `bun dev`: Start dev server with Turbopack.
- `bun run build`: Production build.
- `bun run start`: Start production server.
- `bun run lint`: Run ESLint.
- `bun run typecheck`: Run TypeScript check.
- `bun run fmt`: Format code with Prettier.
- `bun run env:validate`: Check environment variables.
- `bun run db:generate`: Generate Drizzle migrations from schema.
- `bun run db:migrate`: Apply migrations to database.
- `bun run db:studio`: Open Drizzle Studio.

## Deployment

Pushed to GitHub? Link to [Vercel](https://vercel.com) for automatic deployments.
Set usage of Bun in Vercel settings (Build Command: `bun run build`, Install Command: `bun install`).

## 🤖 Operaciones con Agentes (MCP)

Si estás utilizando un Agente de IA (como Windsurf, Cursor, o este mismo chat), puedes automatizar la infraestructura usando los siguientes servidores MCP:

### 1. Base de Datos (Neon MCP)

Usa el servidor `@neondatabase/mcp-server-neon` para provisionar la DB sin salir del chat:

1.  **Crear Proyecto**: Pide al agente `create_project(name: "mi-app-fullstack")`.
2.  **Obtener Credenciales**: Usa `get_connection_string(project_id: "...")`.
3.  **Configurar**: El agente debe actualizar la variable `DATABASE_URL` en tu archivo `.env`.

### 2. Gestión de Código (GitKraken/GitHub MCP)

Usa el servidor de GitKraken para gestionar el versionado:

1.  **Commit**: Usa `git_add_or_commit` para guardar tus cambios.
2.  **Push**: Usa `git_push` para subir al remoto (asegúrate de haber añadido el `remote` previamente con `git remote add origin ...`).

### 3. Despliegue (Vercel MCP)

Usa el servidor de Vercel para el despliegue final:

1.  **Vincular**: Pide al agente que investigue tus proyectos o cree uno nuevo.
2.  **Variables de Entorno**: Es CRUCIAL que pidas al agente sincronizar las variables:
    - `DATABASE_URL`
    - `BETTER_AUTH_SECRET`
    - `RESEND_API_KEY`
3.  **Deploy**: Usa la herramienta de despliegue o `vercel deploy` para publicar.
