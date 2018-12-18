import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['lastDays'],
  lastDays: 7,
  availableDaysFilter: Object.freeze([7,  30])
});
