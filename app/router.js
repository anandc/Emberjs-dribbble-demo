/**
* This class contains the router for the application
**/
import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('shots', {path: '/'});
    this.route('users', {path: 'users/:id'}, function() {
      this.route('usershots', {path: 'shots'});
      this.route('shotdetail', {path: 'shots/:shot_id'});
    });
});
export default Router;
