touch ./src/database/database.sqlite
yarn knex migrate:latest --knexfile ./dist/knexfile.js
chmod -R 777 ./src/database/database.sqlite
