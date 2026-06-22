# 🐳 TP1 — Réparer une image Docker cassée

**Nom :** Chachou Amine  
**Formation :** DevOps Bachelor 2
**Année :** 2025 / 2026  

---

## 📌 Objectif du TP

Ce TP consistait à analyser et corriger un Dockerfile volontairement mal conçu afin de produire une image Docker :

- sécurisée  
- optimisée  
- légère  
- conforme aux bonnes pratiques DevOps  

---

## 🧩 Problèmes identifiés dans le Dockerfile initial

- Image de base trop lourde (`node:18`)
- Présence potentielle de secrets dans l’image
- Mauvais ordre des instructions Docker (cache inefficace)
- Absence d’utilisateur non-root
- Installation de paquets inutiles
- Absence de `.dockerignore`

---

## 🛠️ Corrections apportées

- Passage à une image légère : `node:18-alpine`
- Suppression des secrets dans le Dockerfile
- Optimisation du cache Docker (COPY des dépendances en premier)
- Ajout d’un utilisateur non-root (`node`)
- Suppression des outils inutiles
- Création d’un dossier `/app/data`
- Amélioration de la sécurité globale

---

## 📦 Dockerfile final

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

RUN mkdir -p /app/data
RUN chown -R node:node /app

USER node

EXPOSE 3000

CMD ["node", "dist/index.js"]
