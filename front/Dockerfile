# Use the official Node.js 20 Alpine image as the base
#FROM node:20-alpine
FROM node:latest
COPY public public
COPY src src
COPY .env .env
COPY .eslintrc.cjs .eslintrc.cjs
COPY index.html index.html
COPY package-lock.json package-lock.json
COPY package.json package.json
COPY vite.config.js vite.config.js
RUN npm install
EXPOSE 5173
CMD ["npm", "run", "dev"]
