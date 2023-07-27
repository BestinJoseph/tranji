FROM node:18-alpine

WORKDIR /usr/host

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm","start"]
