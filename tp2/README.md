# 🐳 TP2 — Docker Compose Multi-Services

## 👤 Nom
Chachou Amine

---

## 🎯 Objectif

Créer une architecture multi-services avec Docker Compose :

- Frontend (Nginx)
- API Node.js
- Base de données PostgreSQL
- Adminer (interface DB)

---

## 🧩 Architecture

- Frontend → http://localhost:8080
- API → http://localhost:3000
- Adminer → http://localhost:8081
- PostgreSQL → service interne (non exposé)

---

## ⚙️ Technologies

- Docker Compose
- Node.js
- PostgreSQL
- Nginx
- Adminer

---

## 🔐 Variables d’environnement

Utilisées via `.env` :

- DB_HOST=database
- DB_PORT=5432
- DB_NAME=tp2db
- DB_USER=tp2user
- DB_PASSWORD=tp2pass
- PORT=3000

---

## 🚀 Lancement

```bash
docker compose up --build

Vérifications
Frontend : http://localhost:8080
API : http://localhost:3000/health
Adminer : http://localhost:8081
💾 Persistance

Les données PostgreSQL sont sauvegardées grâce à un volume Docker.

🏁 Conclusion

Projet fonctionnel avec architecture microservices et persistance des données.