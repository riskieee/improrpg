FROM node:alpine AS BUILDER

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD .browserslistrc .prettierrc .eslintrc.js babel.config.js vue.config.js .env.production ./

ADD src ./src
ADD public ./public

# executed  while build
RUN npm run build

FROM node:alpine

WORKDIR /app

RUN npm i -g serve

# compiled/dist folder with app
COPY --from=BUILDER /app/dist ./

# executed after building
CMD serve -s -l $PORT
