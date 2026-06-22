FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY index.js ./

RUN mkdir -p dist && cp index.js dist/index.js

# Création du dossier data et attribution des droits à node
RUN mkdir -p /app/data && chown -R node:node /app

USER node

EXPOSE 3000

CMD ["node", "dist/index.js"]