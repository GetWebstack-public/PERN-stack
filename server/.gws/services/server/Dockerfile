FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
EXPOSE 5000
ENV HOST=0.0.0.0
CMD ["sh", "-c", "until [ -f src/index.js ]; do sleep 1; done && npx nodemon src/index.js"]
