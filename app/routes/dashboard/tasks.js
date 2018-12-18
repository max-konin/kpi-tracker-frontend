import Route from '@ember/routing/route';
import { buildFinishedAtFilter } from 'ember-starter-project/utils/task-filter-builder';

export default Route.extend({
  queryParams: {
    lastDays: { refreshModel: true }
  },

  model(params) {
    const filter = buildFinishedAtFilter(params.lastDays);
    return this.store.query('task', { q: filter });
  }
});
