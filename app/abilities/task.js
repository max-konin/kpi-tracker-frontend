import { Ability } from 'ember-can';
import { inject as service } from '@ember/service';
import { readOnly } from '@ember/object/computed';
import { equal } from 'ember-awesome-macros';

export default Ability.extend({
  currentSession: service(),
  currentUserId: readOnly('currentSession.user.id'),
  modelOwnerId: readOnly('model.user.id'),
  currentUserIsOwner: equal('currentUserId', 'modelOwnerId'),

  canEdit: readOnly('currentUserIsOwner'),
  canDestroy: readOnly('currentUserIsOwner'),
});
