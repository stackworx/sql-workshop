import knex from '../db';

export const setup = async () => {
  await knex('student_course').del();
  await knex('student').del();
  await knex('subject').del();
  await knex('course').del();
};

export const tearDown = async () => {
  await knex.destroy();
};
