import { Factory, association } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  kpiPoints()      { return faker.random.number(); },
  notes()          { return faker.lorem.paragraph(); },
  taskFinishedAt() { return faker.date.past(); },

  user:     association(),
  category: association(),
});
