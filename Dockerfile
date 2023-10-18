FROM node:latest
WORKDIR /app

COPY package.json .
RUN npm i

COPY . .

EXPOSE 8080

ENV BACKEND_URL http://127.0.0.1:5000 

CMD ["npm", "run", "dev"]
