import { expect } from 'chai';
import { describe, it, beforeEach, context } from 'mocha';
import { setupRenderingTest } from 'ember-mocha';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Components | ActivityGoal', function() {
  setupRenderingTest();

  describe('render', function () {
    context('when task has kpiPoints < category.kpiQuantityGoal', function () {
      beforeEach(async function () {
        this.set('task', {
          kpiPoints: 10,
          category: { kpiQuantityGoal: 50 }
        });
        await render(hbs`{{activity-goal task=task}}`);
      });
      it('renders progress-bar with width = kpiPoints * 100 / kpiQuantityGoal', function () {
        const expectedStyle = 'width: 20%'
        expect(this.element.querySelector('.progress-bar')).to.have.attribute('style', expectedStyle)
      });
      it('renders a label with percents', function () {
        expect(this.element.querySelector('.progress-bar')).to.have.text('\n  20%\n')
      });
    });
    context('when task has kpiPoints >= category.kpiQuantityGoal', function () {
      beforeEach(async function () {
        this.set('task', {
          kpiPoints: 100,
          category: { kpiQuantityGoal: 50 }
        });
        await render(hbs`{{activity-goal task=task}}`);
      });
      it('renders progress-bar with width = 100%', function () {
        const expectedStyle = 'width: 100%'
        expect(this.element.querySelector('.progress-bar')).to.have.attribute('style', expectedStyle)
      });
      it('renders a label with percents', function () {
        expect(this.element.querySelector('.progress-bar')).to.have.text('\n  100%\n')
      });
    });
  });
});
