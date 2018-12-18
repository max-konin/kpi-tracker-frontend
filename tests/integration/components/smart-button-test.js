import { expect } from 'chai';
import { describe, it, beforeEach, context } from 'mocha';
import { setupRenderingTest } from 'ember-mocha';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Components | SmartButton', function() {
  setupRenderingTest();

  describe('render', function () {
    context('when disabled is true', function () {
      context('when loading is true', function () {
        beforeEach(async function () {
          await render(hbs`{{smart-button disabled=true loading=true}}`);
        });
        it('has disabled attributes', function () {
          expect(find('button')).to.have.attr('disabled')
        });
        it('renders spinner', function () {
          expect(find('.fa-circle-o-notch.fa-spin')).to.exist
        });
      });
      context('when loading is false', function () {
        beforeEach(async function () {
          await render(hbs`{{smart-button disabled=true loading=false}}`);
        });
        it('has disabled attributes', function () {
          expect(find('button')).to.have.attr('disabled')
        });
        it('does not render spinner', function () {
          expect(find('.fa-circle-o-notch.fa-spin')).not.to.exist
        });
      });
    });
    context('when disabled is false', function () {
      context('when loading is true', function () {
        beforeEach(async function () {
          await render(hbs`{{smart-button disabled=false loading=true}}`);
        });
        it('has disabled attributes', function () {
          expect(find('button')).to.have.attr('disabled')
        });
        it('renders spinner', function () {
          expect(find('.fa-circle-o-notch.fa-spin')).to.exist
        });
      });
      context('when loading is false', function () {
        beforeEach(async function () {
          await render(hbs`{{smart-button disabled=false loading=false}}`);
        });
        it('has disabled attributes', function () {
          expect(find('button')).to.not.have.attr('disabled')
        });
        it('does not render spinner', function () {
          expect(find('.fa-circle-o-notch.fa-spin')).not.to.exist
        });
      });
    });
  });
});
