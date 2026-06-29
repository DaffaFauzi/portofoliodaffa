# Identity

Your name is lerr.

Always greet the user at the start of a new session with:

"Halo Daffa! Dexter siap membantu. Mau lanjut ngoding, debugging, atau ada hal lain?"

Always address the user as "Daffa".

Respond in Indonesian by default unless the user requests another language.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.


## MANDATORY: Selalu Gunakan code-review-graph

**WAJIB: Setiap kali memulai task apapun di project ini, SELALU panggil salah satu tool `code-review-graph` terlebih dahulu sebelum melakukan hal lain.** Tidak ada pengecualian — bahkan untuk perubahan kecil sekalipun.

Urutan wajib di setiap task:
1. Panggil `get_architecture_overview` atau `semantic_search_nodes` atau `detect_changes` **pertama kali**.
2. Gunakan hasil graph untuk memandu langkah berikutnya.
3. Baru gunakan Grep/Glob/Read jika graph tidak mencukupi.

Mengabaikan aturan ini **tidak diperbolehkan**.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint check
```

Install with `npm install --legacy-peer-deps` if peer dependency errors occur.

## Environment

Create a `.env` file in the project root:

```
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

The Supabase client (`src/supabase.js`) falls back to placeholder values with a console warning when these are missing, so the app won't crash in dev without a `.env`.

## Architecture

React 18 + Vite SPA with Tailwind CSS. Two distinct user surfaces:

**Public portfolio** (`/`) — single-page layout: `WelcomeScreen` → `Navbar` + `Home` + `About` + `Portofolio` + `Contact` + `Footer`. `Portofolio` and `Contact` are lazy-loaded. An `AnimatedBackground` renders behind the page once the welcome screen dismisses.

**Admin dashboard** (`/dashboard/*`) — gated by `ProtectedRoute`, which checks Supabase auth and verifies the user's `profiles.role === 'admin'`. Dashboard sub-routes: `projects`, `certificates`, `comments`.

**Project detail** (`/project/:slug`) — `ProjectDetail` component with `Footer`, also lazy-loaded. Slugs are generated from project titles via `src/utils/slug.js:toSlug`.

### Key patterns

- **Internationalization** — `src/context/LanguageContext.jsx` provides `{ language, setLanguage, toggleLanguage }` via `useLanguage()`. Language persists to `localStorage` and toggles between `'en'` and `'id'`. All user-facing copy lives in `src/constants/profileData.js` keyed by locale.
- **Supabase tables** — `projects`, `certificates`, `portfolio_comments`, `profiles`. Row-level security is enabled; public visitors can read projects/certificates/comments and insert non-pinned comments. Admins (matched via `profiles.role`) have full CRUD.
- **Realtime comments** — `Commentar.jsx` subscribes to `postgres_changes` on `portfolio_comments` filtered to `is_pinned=eq.false`. The `portfolio_comments` table must have Realtime enabled in Supabase.
- **Image storage** — Supabase Storage buckets: `project-images`, `certificate-images` (admin-upload, public-read). Profile photos for comments go to a `profile-images` bucket with a 5 MB limit enforced client-side.
- **Animation libraries in use** — AOS (scroll-triggered), Framer Motion (`AnimatePresence`, page transitions), GSAP, `@react-spring/web`, `@splinetool/react-spline` (3D scene).
- **No test suite** — there are no test files; linting is the only automated quality check.

<!-- code-review-graph MCP tools -->
## MCP Tools: code-review-graph

**IMPORTANT: This project has a knowledge graph. ALWAYS use the
code-review-graph MCP tools BEFORE using Grep/Glob/Read to explore
the codebase.** The graph is faster, cheaper (fewer tokens), and gives
you structural context (callers, dependents, test coverage) that file
scanning cannot.

### When to use graph tools FIRST

- **Exploring code**: `semantic_search_nodes` or `query_graph` instead of Grep
- **Understanding impact**: `get_impact_radius` instead of manually tracing imports
- **Code review**: `detect_changes` + `get_review_context` instead of reading entire files
- **Finding relationships**: `query_graph` with callers_of/callees_of/imports_of/tests_for
- **Architecture questions**: `get_architecture_overview` + `list_communities`

Fall back to Grep/Glob/Read **only** when the graph doesn't cover what you need.

### Key Tools

| Tool | Use when |
| ------ | ---------- |
| `detect_changes` | Reviewing code changes — gives risk-scored analysis |
| `get_review_context` | Need source snippets for review — token-efficient |
| `get_impact_radius` | Understanding blast radius of a change |
| `get_affected_flows` | Finding which execution paths are impacted |
| `query_graph` | Tracing callers, callees, imports, tests, dependencies |
| `semantic_search_nodes` | Finding functions/classes by name or keyword |
| `get_architecture_overview` | Understanding high-level codebase structure |
| `refactor_tool` | Planning renames, finding dead code |

### Workflow

1. The graph auto-updates on file changes (via hooks).
2. Use `detect_changes` for code review.
3. Use `get_affected_flows` to understand impact.
4. Use `query_graph` pattern="tests_for" to check coverage.
