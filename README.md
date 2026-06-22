🐳 TP1 — Réparer une image Docker cassée

Nom : Chachou Amine
Formation : DevOps Bachelor 2
Année : 2025/2026

📌 Objectif du TP

Ce TP avait pour objectif d’analyser et corriger un Dockerfile contenant plusieurs mauvaises pratiques afin de produire une image Docker :

sécurisée
optimisée
légère
conforme aux bonnes pratiques DevOps
🧩 Problèmes identifiés
Image de base trop lourde (node:18)
Présence potentielle de secrets dans l’image
Mauvais ordre des couches Docker
Absence d’utilisateur non-root
Installation de paquets inutiles
Absence de .dockerignore
🛠️ Corrections effectuées
Passage à node:18-alpine
Suppression des secrets
Optimisation du cache Docker
Ajout d’un utilisateur non-root (node)
Suppression des outils inutiles
Amélioration de la sécurité globale
📦 Dockerfile final
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
🧪 Commandes utilisées
docker build -t tp1:corrige .
docker run -p 3000:3000 tp1:corrige
docker run --rm tp1:corrige whoami
docker images tp1:corrige
🏁 Résultat
Image fonctionnelle
Image sécurisée
Image optimisée (~186MB)
Application accessible sur http://localhost:3000
✅ Conclusion

Le Dockerfile initial a été entièrement corrigé pour respecter les standards DevOps modernes.