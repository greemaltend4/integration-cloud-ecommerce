FROM node:20

# Create application directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD [ "node", "server.js" ]