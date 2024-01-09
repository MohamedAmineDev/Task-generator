# Use the official Node.js 20 Alpine image as the base
FROM node:20-alpine
WORKDIR /app
COPY package-lock.json package.json vite.config.js ./
COPY index.html .eslintrc.cjs .env ./
COPY src ./src
COPY public ./public
RUN npm install
CMD ["npm", "run", "dev"]
