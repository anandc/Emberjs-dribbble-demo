/**
* serialiser for processing the data returned from REST Api
**/
import DS from 'ember-data';

export default DS.JSONSerializer.extend({
	isNewSerializerAPI : true
});
