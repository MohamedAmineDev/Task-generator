FROM node

COPY public public
COPY src src
COPY index.html index.html
#COPY .env .env         
COPY package-lock.json package-lock.json
#COPY package.json package.json
#COPY vite.config.js vite.config.js

RUN npm install

CMD ["npm", "run", "dev"]
