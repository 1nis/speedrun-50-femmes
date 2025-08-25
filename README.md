
# Speedrun — 50 Femmes

Web‑app **React + Vite + TypeScript + Tailwind + shadcn/ui + Framer Motion**. **PWA**. Aucune API privée: tout est vérifié côté client via **Wikidata**.

## 🚀 Lancer en local

```bash
npm i
npm run dev
```

Ouvre http://localhost:5173

## 🎮 Règles & modes
- Objectif par défaut: **50** noms (réglable 10→100).
- **Mode Libre**: accepte tout texte non vide (anti‑doublon via normalisation).
- **Mode Vérifié**: accepte si présent **(a)** dans la **liste intégrée**, **(b)** dans ta **liste perso**, **ou** **(c)** validé via **Wikidata** comme *humain* (P31=Q5) et *femme* (P21=Q6581072).

## 🔎 Validation Wikidata
`src/lib/wikidata.ts`

## 📦 Déploiement
- Vercel: preset **Vite**, build `npm run build`, output `dist`
- Netlify: build `npm run build`, publish `dist`
