FROM node:10.15.3-alpine

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8079

CMD ["node", "index.js"]