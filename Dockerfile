FROM node:18

# Créer le dossier de l'application
WORKDIR /usr/src/app

# Copier les fichiers de package et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port de l'application
EXPOSE 3000

# Démarrer l'application
CMD [ "node", "server.js" ]