/**
* Data structure for shots, note ember automatically adds id
**/
import DS from 'ember-data';

export default DS.Model.extend({
	/*When you have belongsTo relationship and if that attr is also included in your payload,
	 then you should put embedded: always in your serializer. check serializer/shots.js for more details.*/
	user: DS.belongsTo('user', { async: false }),
  	images: DS.attr(),
  	attachments_count: DS.attr(),
  	views_count: DS.attr(),
  	likes_count: DS.attr(),
  	comments_count: DS.attr()
});
