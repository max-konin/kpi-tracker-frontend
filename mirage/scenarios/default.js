export default function(server) {
  server.create('user', { id: 'me', email: 'me@example.com' });
  const outCat = server.create('category', { name: 'Influencer outreach', kpiDayPeriod: 7, kpiQuantityGoal: 4 });
  const fbCat = server.create('category', { name: 'Facebook posting', kpiDayPeriod: 7, kpiQuantityGoal: 3 });
  const bckCat = server.create(
    'category',
    { name: 'Influencer backlink exchange', kpiDayPeriod: 30, kpiQuantityGoal: 5 }
  )

  server.createList('task', 2, { kpiPoints: 3, taskFinishedAt: new Date(), category: outCat });
  server.createList('task', 1, { kpiPoints: 3, taskFinishedAt: new Date(), category: fbCat, userId: 'me' });
  server.createList('task', 3, { kpiPoints: 1, taskFinishedAt: new Date(), category: bckCat });
}
