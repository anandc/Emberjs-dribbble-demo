/**
* Define the routes for shots. Its responsibility is to hook the data model and fetch the data from REST.
* Uses the global RESTAdapter configuration defined in adapters/application.js
* After model gets populated redirect to shots view.
**/
import Ember from 'ember';
import ApplicationAdapter from '../adapters/application';

export default Ember.Route.extend({
	model() {
        ApplicationAdapter.prototype.namespace = 'v1';
        return this.store.findAll('shots');// populates model
    },
    actions: { /// defined action for user interaction, will be called from shots template
        search: function(val) {
            val = val || $('#new-todo').val();
            var shots = this.store.peekAll('shots'),//store.all is deprecated so use peekAll
                user;
            shots.forEach(function (shot) {
                if (shot.get('user').get('name').toLowerCase() === val.toLowerCase()) {
                    user = shot.get('user');
                    return;
                }
            });
            if (user) {
                this.transitionTo('users.usershots', user);
            } else {
                $('#new-todo').addClass("error");
            }
        }
    }
});
