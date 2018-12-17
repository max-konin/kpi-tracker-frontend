import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  categories: computed(function () {
    return this.store.findAll('category');
  })
});
