import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupApplicationTest } from 'ember-mocha';
import { visit, findAll } from '@ember/test-helpers';
import { authenticateSession } from 'ember-simple-auth/test-support';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

describe('Acceptence | Tasks Page', function() {
  const hooks = setupApplicationTest();
  setupMirage(hooks);

  describe('visit /tasks', function () {
    beforeEach(async function () {
      server.createList('task', 10);
      await authenticateSession({email: 'user@exmple.com'});
      await visit('/tasks');
    });

    it('renders 10 row with task', async function () {
      expect(findAll('[data-test-task-row]').length).to.eq(10)
    });
  });
});