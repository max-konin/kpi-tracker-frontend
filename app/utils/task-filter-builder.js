import moment from 'moment';

const buildDate = daysAgo => moment().subtract(daysAgo, 'd').startOf('day').toDate();
export const buildFinishedAtFilter = daysAgo => ({ task_finished_at_gte: buildDate(daysAgo) });
