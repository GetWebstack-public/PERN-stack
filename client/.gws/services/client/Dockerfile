FROM node:20-alpine
WORKDIR /app
EXPOSE 5173
ENV HOST=0.0.0.0
CMD ["sh", "-c", "until [ -f index.html ]; do sleep 1; done && npm install && npx --no vite"]
