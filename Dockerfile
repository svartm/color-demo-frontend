FROM node:latest AS build
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.25.3-bookworm@sha256:d2e65182b5fd330470eca9b8e23e8a1a0d87cc9b820eb1fb3f034bf8248d37ee
WORKDIR /usr/src/app
COPY --from=build /app/dist/ /usr/share/nginx/html 
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
