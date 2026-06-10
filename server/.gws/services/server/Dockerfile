FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
EXPOSE 5000
ENV HOST=0.0.0.0
CMD ["npx", "nodemon", "src/index.js"]
