/**
* Define the routes for shots. Its responsibility is to hook the data model and fetch the data from REST.
* Uses the global RESTAdapter configuration defined in adapters/application.js
* After model gets populated redirect to shots view.
**/
import Ember from 'ember';

export default Ember.Route.extend({
	model() {
        return this.store.findAll('shots');// populates model
    }
});
