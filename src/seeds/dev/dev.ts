import * as Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('student_course').del();
  await knex('student').del();
  await knex('subject').del();
  await knex('course').del();

  // TODO insert data

  const maths = await knex('course').insert([{name: 'Maths'}]);
}
