FROM node:latest
RUN mkdir /code
WORKDIR /code
COPY package*.json /code/
ARG . /code/
RUN npm install
RUN npm update -D