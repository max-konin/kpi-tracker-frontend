import Component from '@ember/component';
import { readOnly } from '@ember/object/computed';
import { divide, product, math } from 'ember-awesome-macros';
import raw from 'ember-awesome-macros/raw';

export default Component.extend({
  classNames: ['progress'],

  kpiPoints:    readOnly('task.kpiPoints'),
  maxKpiPoints: readOnly('task.category.kpiQuantityGoal'),
  progress:     math.min(divide(product('kpiPoints', raw(100)), 'maxKpiPoints'), 100)
});
