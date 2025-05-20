FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build:ts

EXPOSE 3000

CMD ["node", "./dist/app.js"]
