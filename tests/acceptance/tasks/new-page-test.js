import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupApplicationTest } from 'ember-mocha';
import { visit, find, findAll, fillIn, click, currentURL } from '@ember/test-helpers';
import { authenticateSession } from 'ember-simple-auth/test-support';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { selectChoose } from 'ember-power-select/test-support/helpers';

describe('Acceptence | Tasks | New Page', function() {
  const hooks = setupApplicationTest();
  setupMirage(hooks);

  describe('visit /tasks/new', function () {
    beforeEach(async function () {
      server.create('user', { id: 'me', email: 'me@example.com' });
      server.createList('category', 2);
      await authenticateSession({email: 'user@exmple.com'});
      await visit('/tasks/new');
    });

    it('renders a form', async function () {
      expect(find('form')).to.exist;
    });

    describe('click on the cancel btn', function () {
      it('redirects to the index page', async function () {
        await click('[data-test-cancel-btn]');
        expect(currentURL()).to.eq('/tasks');
      });
    });

    describe('fill in the form and submit', function () {
      beforeEach(async function () {
        await fillIn('[data-test-finised-at] input', '1.12.2020');
        await fillIn('[data-test-notes] textarea', 'Some notes');
        await fillIn('[data-test-kpi-points] input', 2);
        await selectChoose('[data-test-select="category"]', '.ember-power-select-option', 1);
        await click('button[type="submit"]');
      });
      it('creates a new task on the server', function () {
        expect(server.db.tasks.length).to.eq(1);
      });
      it('adds table rows', function () {
        expect(findAll('[data-test-task-row]').length).to.eq(1);
      });
      it('redirects to the index page', function () {
        expect(currentURL()).to.eq('/tasks');
      });
      it('shows success msg', function () {
        expect(find('.alert-success')).to.exist;
      });
    });
  });
});
