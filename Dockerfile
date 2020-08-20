FROM node:current-alpine

WORKDIR /app

COPY package-lock.lock .
COPY package.json .

RUN [ "npm", "install" ]

COPY data /app/data
COPY src /app/src
COPY public /app/public

RUN [ "npm", "build" ]

EXPOSE 3000 8080

CMD [ "npm", "serve:production" ]
