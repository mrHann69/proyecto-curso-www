FROM node:18.6.0
WORKDIR /app
COPY ./package*.json ./
RUN npm cache clean --force
RUN npm install
COPY . .
EXPOSE 4000
CMD ["node","src/index.js"]

