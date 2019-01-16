import {Model} from 'objection';
import Knex from './db';

Model.knex(Knex);

export class Student extends Model {
  static get tableName() {
    return 'student';
  }
}

export class Course extends Model {
  public name?: string;

  static get tableName() {
    return 'course';
  }
}

export class Subject extends Model {
  static get tableName() {
    return 'subject';
  }
}
