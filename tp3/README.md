# TP3 - TaskFlow (Docker Compose)


## Objectif
Conteneuriser une application TaskFlow avec 3 services :
- frontend (Nginx)
- backend (Node.js)
- cache (Redis)

---


## Architecture

- Frontend : http://localhost:8080
- Backend : http://localhost:3001
- Redis : service interne uniquement (non exposé)

---

## Lancement du projet



```bash
docker compose up --build
Tests
Backend
http://localhost:3001/health



Résultat attendu :

{"status":"ok"}
Frontend
http://localhost:8080



Fonctionnalités :

Ajouter une tâche
Afficher la liste des tâches


Fonctionnement


Le frontend communique avec le backend via HTTP
Le backend stocke les tâches en mémoire
Redis est présent dans la stack mais non exposé
Arrêt du projet
docker compose down -v


Technologies utilisées


Docker
Docker Compose
Node.js
Nginx
Redis