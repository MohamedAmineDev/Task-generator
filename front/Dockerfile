# Use the official Node.js 20 Alpine image as the base
# FROM node:20-alpine
FROM node:latest

# Copy necessary project files and folders
COPY public public
COPY src src
COPY index.html index.html
COPY package-lock.json package-lock.json
COPY package.json package.json
COPY vite.config.js vite.config.js

# Uncomment these lines if needed
# COPY .env .env
# COPY .eslintrc.cjs .eslintrc.cjs

# Install project dependencies
RUN npm install

# Expose the port that the application runs on
EXPOSE 5173

# Set the default command to start the development server
CMD ["npm", "run", "dev"]
