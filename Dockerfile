FROM node:17

RUN mkdir -p /src
WORKDIR /src
COPY ./src .

COPY ./src/package.json .
RUN npm install -g npm && npm install

# Debug
RUN ls -la
EXPOSE 8080

# CMD npm start