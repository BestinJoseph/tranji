FROM node:18-alpine AS build

WORKDIR /usr/host

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build

######################################

FROM nginx:1.17.1-alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /usr/host/nginx/nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf ./*

COPY --from=build /usr/host/build .

COPY --from=build /usr/host/public .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
