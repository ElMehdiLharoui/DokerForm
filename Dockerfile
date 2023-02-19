FROM node:14

WORKDIR /MyApp

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8082

CMD [ "node","index.js" ]