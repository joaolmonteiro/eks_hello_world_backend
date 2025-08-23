# Use a lightweight Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY ./backendcode .

# Expose the port your app listens on
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
