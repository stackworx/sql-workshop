import {setup, tearDown} from './util';

import {Course} from '../models';

beforeEach(async () => setup());
afterAll(async () => tearDown());

test('insert using knex', async () => {
  // given
  const name = 'Maths';

  // when
  const course = await Course.query().insert({name});

  // then
  expect(course).toMatchObject({
    name: 'Failure',
  });
});
