import moment from 'moment';

const buildDate = daysAgo => moment().subtract(daysAgo, 'd').startOf('day').toISOString();
export const buildFinishedAtFilter = daysAgo => ({ task_finished_at_gteq: buildDate(daysAgo) });
