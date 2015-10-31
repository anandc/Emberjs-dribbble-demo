import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	avatar_url: DS.attr(),
	location: DS.attr(),
	links: DS.attr(),
	pro: DS.attr()
});
