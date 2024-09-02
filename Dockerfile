FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install ws

EXPOSE 8080

CMD ["node" , "server.js"]

