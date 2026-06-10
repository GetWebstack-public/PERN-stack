FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
EXPOSE 5173
ENV HOST=0.0.0.0
CMD ["sh", "-c", "until [ -f index.html ]; do sleep 1; done && npx vite --host 0.0.0.0 --port 5173"]
