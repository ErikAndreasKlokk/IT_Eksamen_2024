# https://gist.github.com/AradAlvand/04b2cad14b00e5ffe8ec96a3afbb34fb
# noe av koden er tatt herfra

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "node", "build" ]