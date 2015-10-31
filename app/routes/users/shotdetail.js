import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
        return this.store.find('shots', params.shot_id);
    },
    afterModel: function(shot) {
		this.transitionTo('users.shotdetail', shot.get('id'));
	}
});
