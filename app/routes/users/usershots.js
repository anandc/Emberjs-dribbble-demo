import Ember from 'ember';
import ApplicationAdapter from '../../adapters/application';

export default Ember.Route.extend({
	model() {
		let user_id = this.store.peekAll('user').get('firstObject').get('id');
		ApplicationAdapter.prototype.namespace = 'v1/users/' + user_id; 
        return this.store.findAll('shots');
    }
});
