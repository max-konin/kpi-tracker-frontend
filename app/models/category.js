import DS from 'ember-data';

export default DS.Model.extend({
  kpiPeriod:       DS.attr('number'),
  kpiQuantityGoal: DS.attr('number'),
  name:            DS.attr('string')
});
