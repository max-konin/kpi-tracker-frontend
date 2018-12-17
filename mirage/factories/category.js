import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  kpiPeriod: 30,
  kpiQuantityGoal() { return faker.random.number(); },
  name() { return faker.name.jobDescriptor(); }
});
