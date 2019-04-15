FROM node:8.12.0-alpine

WORKDIR /app

COPY . .
RUN yarn
RUN yarn build

EXPOSE 3000
CMD node node_modules/serve/bin/serve.js -s build -p 3000
