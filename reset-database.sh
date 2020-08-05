rm ./src/database/database.sqlite
touch ./src/database/database.sqlite
yarn knex migrate:latest
sudo chmod -R 777 ./src/database/database.sqlite