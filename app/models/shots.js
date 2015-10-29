import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.attr(),
  	images: DS.attr(),
  	attachments_count: DS.attr(),
  	views_count: DS.attr(),
  	likes_count: DS.attr(),
  	comments_count: DS.attr()
});
