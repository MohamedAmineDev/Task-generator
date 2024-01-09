# Use the official Node.js 20 Alpine image as the base
FROM node:20-alpine
WORKDIR /app
COPY package-lock.json package.json vite.config.js ./
COPY index.html .eslintrc.cjs .env ./
RUN npm install
COPY src ./src
COPY public ./public
CMD ["npm", "run", "dev"]