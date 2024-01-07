FROM node:20-alpine
RUN npm clean-install
COPY . .
RUN npm install
EXPOSE 5173
CMD ["npm","run","dev"]