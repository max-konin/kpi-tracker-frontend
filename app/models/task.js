import DS from 'ember-data';

export default DS.Model.extend({
  kpiPoints:      DS.attr('number'),
  notes:          DS.attr('string'),
  taskFinishedAt: DS.attr('date'),

  user:     DS.belongsTo({ async: false }),
  category: DS.belongsTo({ async: false })
});
