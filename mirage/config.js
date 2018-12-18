export default function() {
  this.post('oauth/token', function () {
    return { access_token: 'token', expires_in: 999999 }
  });

  this.namespace = '/api/v1';

  this.get('/users/me', function (schema) {
    return schema.create('user', { email: 'me@example.com' });
  })

  this.get('/categories');
  this.get('/categories/:id');

  this.get('/tasks');
  this.post('/tasks');
  this.get('/tasks/:id');
  this.patch('/tasks/:id');
  this.delete('/tasks/:id');
}
