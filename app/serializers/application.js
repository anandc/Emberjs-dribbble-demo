import DS from 'ember-data';

export default DS.JSONSerializer.extend({
	extract: function (store, typeClass, payload, id, requestType) {
		return this._super(store, typeClass, payload, id, requestType);
	},
	normalizePayload: function (payload) {
		payload[0].shot = payload; //Fixme: Just for easy iteration in map component, getEach('shots') not returning array
	 	return payload;
	}
});
