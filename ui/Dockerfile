FROM node:14.14.0-alpine3.12

WORKDIR /app

COPY package.json .

COPY . .

RUN npm install

CMD ["npm","run","start"]