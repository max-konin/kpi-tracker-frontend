import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';
import { inject as controller } from '@ember/controller';

export default Controller.extend({
  flashMessages: service(),
  router: service(),
  tasksController: controller('dashboard.tasks'),

  categories: computed(function () {
    return this.store.findAll('category');
  }),

  save: task(function * () {
    try {
      yield this.model.save();
      this.flashMessages.success('Successfully added!');
      this.tasksController.model.update();
      this.router.transitionTo('dashboard.tasks.index');
    } catch (_) {
      this.flashMessages.danger('Something went wrong!');
    }
  }),

  actions: {
    back() { this.router.transitionTo('dashboard.tasks.index'); }
  }
});
