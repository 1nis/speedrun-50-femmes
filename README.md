# ✨ Speedrun — 50 Femmes

Un jeu web où l'objectif est de **citer 50 femmes connues le plus rapidement possible ⏱️**.  
Construit avec **React + Vite + TypeScript + Tailwind + shadcn/ui + Framer Motion**, et vérification via **Wikidata**.

---

## 🚀 Démo

---

## 🧱 Stack & technologies
- ⚛️ **React 18 + Vite + TypeScript**
- 🎨 **TailwindCSS** + composants **shadcn/ui**
- 🎞️ **Framer Motion** → micro-animations
- 🎉 **canvas-confetti** → célébration de la victoire
- 📱 **PWA** (manifest + service worker)
- 🌍 **Wikidata API** pour validation stricte

---

## 🎮 Concept du jeu
- Objectif par défaut : **50 noms** (configurable de 10 à 100).
- Chronomètre **Start / Pause / Reset**.
- Progression visuelle : compteur + barre de progression.
- Grille responsive des réponses valides.
- **Deux modes** :
  - 🔓 **Mode Libre** : tout nom accepté (anti-doublons, accents/casse ignorés).
  - ✅ **Mode Vérifié** : validation stricte :
    1. Liste intégrée (≈120 femmes célèbres).
    2. Liste personnalisée de l’utilisateur.
    3. Vérification en ligne via **Wikidata** :
       - `P31 = Q5` (*humain*)
       - `P21 = Q6581072` (*femme*)

---

## 📦 Installation & lancement

```bash
# Cloner le projet
git clone https://github.com/1nis/speedrun-50-femmes.git
cd speedrun-50-femmes

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build de production
npm run build
npm run preview
