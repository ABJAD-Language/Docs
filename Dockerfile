FROM node:18-alpine AS build

RUN mkdir -p /app
WORKDIR /app
EXPOSE 80

COPY package*.json /app/
RUN npm install

COPY . /app/
RUN npm run build

FROM nginx:alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
