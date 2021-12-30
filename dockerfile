FROM node:16

WORKDIR /f04-team00-client/
COPY ./package.json /f04-team00-client/
COPY ./yarn.lock /f04-team00-client/
RUN yarn install

COPY . /f04-team00-client/

CMD yarn start