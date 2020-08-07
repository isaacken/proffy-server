touch ./src/database/database.sqlite
yarn knex migrate:latest --knexfile ./dist/knexfile.js
sudo chmod -R 777 ./src/database/database.sqlite
