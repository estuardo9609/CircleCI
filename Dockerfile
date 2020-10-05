FROM node:10

WORKDIR /usr/src

COPY [".", "/usr/src"]

RUN npm install --production

RUN npm audit fix

EXPOSE 80

CMD npm start