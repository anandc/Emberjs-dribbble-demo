import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		//This will not be called if transition is via shots as model is passed and mode hook doesnot execute.
		// Then why we need this code ?
		// If the user reloads the url, then we need to fetch user based on the dynamic segment.
        return this.store.find('user', params.id);
    },
	afterModel: function(user) {
		this.transitionTo('users.usershots', user.get('id'));
	}
});
