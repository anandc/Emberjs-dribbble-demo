import Ember from 'ember';
import ApplicationAdapter from '../../adapters/application';

export default Ember.Route.extend({
	model(params, transition) {
		let user_id = transition.resolvedModels.users.get('id');
		ApplicationAdapter.reopen({
			namespace: 'v1/users/' + user_id
		});
		this.store.unloadAll('shots');
        return this.store.findAll('shots');
    }
});
