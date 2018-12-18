import { expect } from 'chai';
import { describe, it, context } from 'mocha';
import { setupTest } from 'ember-mocha';
import { run } from '@ember/runloop';

describe('Unit | Abilities | Task', function () {
  setupTest();

  it('exists', function() {
    let apility = this.owner.lookup('ability:task');
    expect(apility).to.be.ok;
  });

  describe('#canEdit', function () {
    context('when user is owner', function () {
      it('returns true', function () {
        const ability = this.owner.lookup('ability:task');
        run(() => {
          ability.set('currentSession', { user: { id: 1 } });
          ability.set('model', { user: { id: 1 } });
          expect(ability.get('canEdit')).to.be.true;
        });
      });
    });
    context('when user is not owner', function () {
      it('returns false', function () {
        const ability = this.owner.lookup('ability:task');
        run(() => {
          ability.set('currentSession', { user: { id: 1 } });
          ability.set('model', { user: { id: 2 } });
          expect(ability.get('canEdit')).to.be.false;
        });
      });
    });
  });
});