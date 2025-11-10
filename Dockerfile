# Use official Node.js image

FROM node:18


# Set working directory

WORKDIR /usr/src/app


# Copy files

COPY package*.json ./

RUN npm install

COPY . .


# Expose the port

EXPOSE 8080


# Start the app

CMD ["node", "server.js"]

