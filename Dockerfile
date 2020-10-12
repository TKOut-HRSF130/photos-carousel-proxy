FROM node:12.16.1

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --production

COPY . .

EXPOSE 3004

CMD ["npm", "start"]