import Ember from 'ember';

export default Ember.Route.extend({
	model() {
        return this.store.findAll('shots');
    },
    actions: {
        search: function(val) {
            val = val || $('#new-todo').val();
            var shots = this.store.all('shots'),
                user;
            shots.forEach(function (shot) {
                if (shot.get('user').name.toLowerCase() === val.toLowerCase()) {
                    user = shot.get('user');
                    return;
                }
            });
            if (user) {
                this.transitionTo('/users/' + user.id);
            } else {
                $('#new-todo').addClass("error");
            }
        }
    }
});
