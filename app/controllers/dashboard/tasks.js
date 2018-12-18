import Controller from '@ember/controller';
import { task } from 'ember-concurrency';

export default Controller.extend({
  queryParams: ['lastDays'],
  lastDays: 7,
  availableDaysFilter: Object.freeze([7,  30]),

  destroyTask: task(function * (task) {
    try {
      yield task.destroyRecord();
      this.flashMessages.success('Successfully deleted!');
    } catch (_) {
      this.flashMessages.danger('Something went wrong!');
    }
  }),
});
