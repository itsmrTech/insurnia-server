FROM node:16.16.0-alpine



ENV TZ=Asia/Tehran
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/package.json
RUN npm install

ADD . .
CMD ["npm", "start"]
