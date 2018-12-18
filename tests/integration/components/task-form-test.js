import { expect } from 'chai';
import { describe, it, context } from 'mocha';
import { setupRenderingTest } from 'ember-mocha';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Components | TaskForm', function() {
  setupRenderingTest();

  describe('render', function () {
    context('when task is running', function () {
      it('renders a spinner in submit button', async function () {
        this.set('saveTask', { isRunning: true });
        await render(hbs`{{task-form saveTask=saveTask}}`);
        expect(find('.fa-circle-o-notch.fa-spin')).to.exist;
      });
    });
    context('when task is not running', function () {
      it('renders a spinner in submit button', async function () {
        this.set('saveTask', { isRunning: false });
        await render(hbs`{{task-form saveTask=saveTask}}`);
        expect(find('.fa-circle-o-notch.fa-spin')).not.to.exist;
      });
    });
    context('when data is valid', function () {
      it('renders enabled button', async function () {
        this.set('task', { validations: { isInvalid: false } });
        await render(hbs`{{task-form task=task}}`);
        expect(find('button[type=submit]')).not.to.have.attr('disabled');
      });
    });
    context('when data is not valid', function () {
      it('renders disabled button', async function () {
        this.set('task', { validations: { isInvalid: true } });
        await render(hbs`{{task-form task=task}}`);
        expect(find('button[type=submit]')).to.have.attr('disabled');
      });
    });
  });
});
