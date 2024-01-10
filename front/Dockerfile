FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY public public
COPY src src
COPY index.html index.html        
COPY package-lock.json package-lock.json
COPY vite.config.js vite.config.js



CMD ["npm", "run", "dev"]