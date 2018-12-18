import Component from '@ember/component';
import { or } from '@ember/object/computed';

export default Component.extend({
  isDisabled: or('disabled', 'loading')
});
