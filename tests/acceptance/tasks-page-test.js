import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupApplicationTest } from 'ember-mocha';
import { visit, find, findAll, click, currentURL } from '@ember/test-helpers';
import { authenticateSession } from 'ember-simple-auth/test-support';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { selectChoose } from 'ember-power-select/test-support/helpers';

describe('Acceptence | Tasks Page', function() {
  const hooks = setupApplicationTest();
  setupMirage(hooks);

  describe('visit /tasks', function () {
    let myTask, otherTask;

    beforeEach(async function () {
      server.create('user', { id: 'me', email: 'me@example.com' });
      myTask = server.create('task', { userId: 'me'});
      otherTask = server.create('task');
      await authenticateSession({email: 'user@exmple.com'});
      await visit('/tasks');
    });

    it('renders 2 rows with task', async function () {
      expect(findAll('[data-test-task-row]').length).to.eq(2)
    });

    it('renders an edit btn for my task', function () {
      expect(find(`[data-test-task-row="${myTask.id}"] [data-test-edit]`)).to.exist;
    });

    it('renders a destroy btn for my task', function () {
      expect(find(`[data-test-task-row="${myTask.id}"] [data-test-destroy]`)).to.exist;
    });

    it('does not render an edit btn for my other task', function () {
      expect(find(`[data-test-task-row="${otherTask.id}"] [data-test-edit]`)).not.to.exist;
    });

    it('does not render a destroy btn for my other task', function () {
      expect(find(`[data-test-task-row="${otherTask.id}"] [data-test-destroy]`)).not.to.exist;
    });

    describe('delete a taks', function() {
      beforeEach(async function () {
        await click(`[data-test-task-row="${myTask.id}"] [data-test-destroy]`);
      });
      it('removes the task from the table', function () {
        expect(findAll('[data-test-task-row]').length).to.eq(1)
      });
      it('removes the task from the server', function () {
        expect(server.db.tasks.length).to.eq(1);
      });
      it('shows success msg', function () {
        expect(find('.alert-success')).to.exist;
      });
    });
  
    describe('click on Add task btn', function () {
      it('redirects to /tasks/new page', async function () {
        await click('[data-test-add-task]');
        expect(currentURL()).to.eq('/tasks/new');
      });
    });

    describe('change filter', function () {
      it('changes query param lastDays', async function () {
        await selectChoose('[data-test-filter]', '.ember-power-select-option', 1);
        expect(currentURL()).to.eq('/tasks?lastDays=30');
      });
    });
  });
});
