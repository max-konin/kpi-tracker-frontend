import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupApplicationTest } from 'ember-mocha';
import { visit, find, fillIn, click, currentURL } from '@ember/test-helpers';
import { authenticateSession } from 'ember-simple-auth/test-support';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { openDatepicker } from 'ember-pikaday/helpers/pikaday';
import { selectChoose } from 'ember-power-select/test-support/helpers';

describe('Acceptence | Tasks | New Page', function() {
  const hooks = setupApplicationTest();
  setupMirage(hooks);

  describe('visit /tasks/new', function () {
    beforeEach(async function () {
      server.createList('category', 2);
      await authenticateSession({email: 'user@exmple.com'});
      await visit('/tasks/new');
    });

    it('renders a form', async function () {
      expect(find('form')).to.exist();
    });

    describe('fill in the form and submit', function () {
      beforeEach(async function () {
        const finishedAtInteractor = openDatepicker(find('[data-test-finised-at]'));
        finishedAtInteractor.selectDate(new Date());
        fillIn('[data-test-notes', 'Some notes');
        fillIn('[data-test-kpi-points', 2);
        await selectChoose('[data-test-category]', '.ember-power-select-option', 1);
        await click('data-test-submit');
      });
      it('creates a new task on the server', function () {
        expect(server.db.tasks.length).to.eq(1);
      });
      it('redirects to the index page', function () {
        expect(currentURL()).to.eq('/tasks');
      });
      it('shows success msg', function () {
        expect(find('.success')).to.exist();
      });
    });
  });
});