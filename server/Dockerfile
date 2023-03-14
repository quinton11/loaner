FROM node:14.14.0-alpine3.12 as base-build

WORKDIR /loaner

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000


# dev build
FROM base-build as dev-build

ENV NODE_ENV dev

CMD ["npm","run","start:dev"]


# prod build
FROM base-build as prod-build

ENV NODE_ENV prod

CMD ["npm","run","start:prod"]