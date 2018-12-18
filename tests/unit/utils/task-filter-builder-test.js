import { expect } from 'chai';
import { describe, it } from 'mocha'
import { buildFinishedAtFilter } from 'ember-starter-project/utils/task-filter-builder';
import moment from 'moment';

describe('Utils | TaskFilterbuilder', function () {
  describe('#buildFinishedAtFilter', function () {
    it('builds filter for taskFinishedAt field with gte options', function () {
      const expectedDate = moment().subtract(7,'d').startOf('day').toDate()
      expect(buildFinishedAtFilter(7)).to.deep.eq({ task_finished_at_gte: expectedDate })
    });
  });
});
