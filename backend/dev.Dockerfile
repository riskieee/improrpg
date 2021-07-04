FROM node:alpine

RUN npm install -g nodemon

WORKDIR /app

ADD src ./src

ADD package.json package-lock.json ./

RUN npm install

ADD bin ./bin

CMD [ "nodemon" ]