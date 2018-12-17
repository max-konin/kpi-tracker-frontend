import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('dashboard', { path: '' }, function() {
    this.route('tasks', function () {
      this.route('new', function () {

      });
      this.route('task', { path: ':task_id' }, function () {
        this.route('edit');
      });
    });
  });
});

export default Router;
