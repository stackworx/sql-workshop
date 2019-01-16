import * as Knex from 'knex';
import {TableBuilder} from 'knex';

export async function up(knex: Knex) {
  await knex.schema.createTable('course', (table: TableBuilder) => {
    table.increments().primary();
    table
      .string('name', 50)
      .notNullable()
      .index();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .index()
      .notNullable();
  });

  await knex.schema.createTable('subject', (table: TableBuilder) => {
    table.increments().primary();
    table
      .string('name', 50)
      .notNullable()
      .index();
    table
      .integer('course_id')
      .unsigned()
      .index()
      .references('course.id')
      .onDelete('CASCADE')
      .notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .index()
      .notNullable();
  });

  await knex.schema.createTable('student', (table: TableBuilder) => {
    table.increments().primary();
    table
      .string('firstname', 50)
      .notNullable()
      .index();
    table
      .string('lastname', 50)
      .notNullable()
      .index();
    table
      .string('email', 50)
      .notNullable()
      .unique();
    table
      .integer('age')
      .unsigned()
      .notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .index()
      .notNullable();
  });

  await knex.schema.createTable('student_course', (table: TableBuilder) => {
    table.increments().primary();
    table
      .integer('course_id')
      .unsigned()
      .index()
      .references('course.id')
      .onDelete('CASCADE')
      .notNullable();
    table
      .integer('student_id')
      .unsigned()
      .index()
      .references('student.id')
      .onDelete('CASCADE')
      .notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .index()
      .notNullable();
  });
}

export async function down(knex: Knex) {
  await knex.schema.dropTable('student_course');
  await knex.schema.dropTable('student');
  await knex.schema.dropTable('subject');
  await knex.schema.dropTable('course');
}
