FROM node:20-alpine
COPY package-lock.json package-lock.json
COPY package.json package.json
COPY vite.config.js vite.config.js
COPY index.html index.html
COPY src /src
COPY public /public
COPY .eslintrc.cjs .eslintrc.cjs
RUN npm install
CMD ["npm","run","dev"]