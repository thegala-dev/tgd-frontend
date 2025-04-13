# thegala.dev

> Dove la passione diventa professione.

Blog tecnico-personale ispirato al mondo Laravel, ma con uno sguardo più ampio su sviluppo web, team, prodotto e mentoring. Scritto con JetBrains Mono, sviluppato in dark mode, condito con ironia e amore per i dettagli.

## 📁 Struttura del progetto

- `fe/` – Frontend Nuxt 3
- `be/` – Backend Laravel (in arrivo)
- `content/` – File Markdown serviti da Nuxt Content
- `assets/img/` – Loghi, hero, icone statiche

## 📦 Tech stack

### Frontend
- Nuxt 3
- Tailwind CSS 4
- Nuxt Content 3.4
- Vue 3 Composition API
- Icone: Lucide + Iconify
- Font: JetBrains Mono

### Backend (WIP)
- Laravel 11
- DTO JSON condiviso per `meta`, `hero`, `content`, `drawer`
- API `/api/pages/{slug}`

## 🧠 SSOT – Struttura del contenuto Markdown
Ogni file `.md` ha frontmatter come:

```yaml
meta:
  title: "Titolo pagina"
  description: "Descrizione SEO"
hero:
  img: "https://..."
drawer: null # oppure enum
```

## 🔧 Composables Nuxt

- `useMarkdownContent()` → `markdownFromFile()` / `markdownFromApi()`
- `useApi()` → gestisce chiamate fetch con base `/api`, endpoint configurabile

## 🧩 Componenti principali

- `PageLayout.vue` → layout base per tutte le pagine
- `Hero.vue` → gestisce immagine hero + alt
- `Drawer.vue` → colonna secondaria (sticky/drawer mobile)
- `Content.vue` → wrapper che integra `ContentRenderer`
- `UiFlex.vue`, `UiGrid.vue`, `UiCard.vue` → contenitori responsive con classi tailwind controllate da props
- `Icon.vue` → wrapper per icone (Lucide/Iconify)

## 🧪 Preview Design System

Visibile alla pagina `/design-system`, con esempi di:
- Flex row/col
- Grid responsive
- Card
- Markdown + Prose Components

## 🦸‍♂️ Pagina Support
Contenuto statico Markdown (`content/pages/support.md`) + immagine Hero custom. Tre livelli di Patreon:

- **G# Supporter** – €3/mese
- **Crazy Dev Senior** – €6/mese
- **Head of Main Branch** – €12/mese

## ⚠️ TODO

- Gestione errori e pagine `404.vue`, `500.vue`
- Sidebar dinamiche via `drawer`
- CMS o pannello admin lato Laravel
- Integrazione API Patreon
- Ottimizzazione SEO (meta tag + opengraph)

## 🤖 Co-founder AI
Nessuna intelligenza artificiale è stata maltrattata nella realizzazione di questo progetto.
> Anzi, è co-founder.
