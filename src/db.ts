import Knex from 'knex';
import {knexSnakeCaseMappers} from 'objection';

const connection = {
  host: 'localhost',
  user: 'postgres',
  port: '5432',
  password: 'password',
  database: 'postgres',
};

const knex = Knex({
  client: 'postgresql',
  connection,
  ...knexSnakeCaseMappers(),
});

export default knex;
