FROM node:20-alpine
COPY package-lock.json package-lock.json
COPY package.json package.json
COPY src /src
COPY public /public
COPY index.html index.html
COPY vite.config.js vite.config.js
RUN npm install
CMD ["npm","run","dev"]