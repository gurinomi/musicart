FROM node:14-alpine

RUN apk add --no-cache libc6-compat
ENV APP_PATH /app

RUN mkdir $APP_PATH
WORKDIR $APP_PATH

COPY ./front/app $APP_PATH
RUN npm install 

CMD ["npm","run","dev"]
