import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'https://api.dribbble.com',
		namespace: 'v1',
		headers: {
			'Authorization': 'Bearer 23c75e295928229ca4f87528ec8e0beff6c32362b422f490693635b15816d029'
		}
	}, {
	shouldReloadAll: function () {
		return true;
	}
});
