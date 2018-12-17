import DS from 'ember-data';
import { readOnly } from '@ember/object/computed';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  notes: validator('presence', true),
  taskFinishedAt: validator('presence', true),
  category: validator('presence', true),
  kpiPoints: [
    validator('presence', true),
    validator('number', {
      gt: 0,
      lte: readOnly('category.kpiQuantityGoal'),
      allowString: true
    })
  ]
});

export default DS.Model.extend(Validations, {
  kpiPoints:      DS.attr('number'),
  notes:          DS.attr('string'),
  taskFinishedAt: DS.attr('date'),

  user:     DS.belongsTo({ async: false }),
  category: DS.belongsTo({ async: false })
});
