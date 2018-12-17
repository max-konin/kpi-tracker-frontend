import Route from '@ember/routing/route';

export default Route.extend({
  model() { return this.store.createRecord('task') },

  actions: {
    willTransition() {
      if (this.currentModel.get('hasDirtyAttributes')) {
        return this.currentModel.rollbackAttributes();
      }
    }
  }
});
