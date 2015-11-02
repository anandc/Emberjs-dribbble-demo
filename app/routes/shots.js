/**
* Define the routes for shots. Its responsibility is to hook the data model and fetch the data from REST.
* Uses the global RESTAdapter configuration defined in adapters/application.js
* After model gets populated redirect to shots view.
**/
import Ember from 'ember';
import ApplicationAdapter from '../adapters/application';

export default Ember.Route.extend({
	model() {
		ApplicationAdapter.reopen({
			namespace: 'v1'
		});
		this.store.unloadAll('shots');
		this.store.unloadAll('user');
        return this.store.findAll('shots');// populates model
    }
});
