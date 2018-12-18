import Component from '@ember/component';
import { or } from '@ember/object/computed';

export default Component.extend({
  classNames: ['smart-btn'],
  isDisabled: or('disabled', 'loading')
});
