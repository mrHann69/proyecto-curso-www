# FROM node:18
# WORKDIR /app
# COPY ./package*.json ./
# RUN npm cache clean --force
# RUN npm install
# COPY . .
# EXPOSE 4000
# # CMD ["node","src/index.js"]

FROM node:18
COPY ["package.json", "package-lock.json", "/usr/src/"]
WORKDIR /usr/src/
RUN npm install
COPY [".","/usr/src/"]
EXPOSE 4000
CMD ["node", "index.js"]