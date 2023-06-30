# para iniciar la API

## base de datos y aplicacion
sudo docker-compose up -d

## crear base de datos
npm run db:create

## correr migracion
npm run migrations-dev:run

## revertir migracion
npm run migrations-dev:revert


