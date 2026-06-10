FROM node:20-alpine
WORKDIR /app
EXPOSE 5000
ENV HOST=0.0.0.0
CMD ["sh", "-c", "until [ -f src/index.js ]; do sleep 1; done && npm install && npx --no nodemon src/index.js"]
