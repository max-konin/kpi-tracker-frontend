import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupApplicationTest } from 'ember-mocha';
import { visit, find, fillIn, click, currentURL } from '@ember/test-helpers';
import { authenticateSession } from 'ember-simple-auth/test-support';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { selectChoose } from 'ember-power-select/test-support/helpers';

describe('Acceptence | Tasks | Task | Edit Page', function() {
  const hooks = setupApplicationTest();
  setupMirage(hooks);

  describe('visit /tasks/:id/edit', function () {
    beforeEach(async function () {
      server.createList('category', 2);
      const task = server.create('task');
      await authenticateSession({email: 'user@exmple.com'});
      await visit(`tasks/${task.id}/edit`);
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
      it('redirects to the index page', function () {
        expect(currentURL()).to.eq('/tasks');
      });
      it('shows success msg', function () {
        expect(find('.alert-success')).to.exist;
      });
    });
  });
});
