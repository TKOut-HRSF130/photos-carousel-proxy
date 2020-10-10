FROM node:12.16.1

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3004

CMD ["node", "server/server.js"]