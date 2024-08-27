#backend/Dockerfile
# Utiliser une image officielle de Node.js comme environnement de base
FROM node:16

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port sur lequel votre backend écoute
EXPOSE 3000

# Commande pour démarrer votre application
CMD ["node", "src/app.js"]
