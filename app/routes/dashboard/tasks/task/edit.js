import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  router: service(),
  can:    service(),

  afterModel(model) {
    if (this.can.cannot('edit task', model)) {
      this.router.transitionTo('/tasks');
    }
  }
});
