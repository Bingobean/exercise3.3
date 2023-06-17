FROM node:16

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8008

CMD ["node","server.js"]