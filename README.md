# DevOps TP - Docker & Docker Compose

## Auteur
Amine Chachou


## 📌 Description générale
Ce repository contient trois travaux pratiques (TP1, TP2, TP3) réalisés dans le cadre du module DevOps.

Chaque TP illustre une étape de la conteneurisation et de l'orchestration d'applications avec Docker.

---

# 📁 TP1 - Application Node.js avec Docker

## Objectif
Conteneuriser une application Node.js simple.

## Lancer le projet
```bash
cd tp1
docker build -t tp1-app .
docker run -p 3000:3000 tp1-app
📁 TP2 - Architecture multi-services
Objectif

Mettre en place une architecture avec :

Backend Node.js
Frontend Nginx
Base de données PostgreSQL
Adminer
Lancer le projet
cd tp2
docker compose up --build
Services
Frontend : http://localhost:8080
Backend : http://localhost:3000
Adminer : http://localhost:8081
📁 TP3 - TaskFlow (Microservices Docker Compose)
Objectif

Conteneuriser une application complète avec :

Frontend (Nginx)
Backend (Node.js)
Cache Redis
Lancer le projet
cd tp3
docker compose up --build
Services
Frontend : http://localhost:8080
Backend : http://localhost:3001
Redis : interne uniquement
🛠 Technologies utilisées
Docker
Docker Compose
Node.js
Nginx
Redis
