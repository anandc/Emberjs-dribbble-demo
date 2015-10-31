/**
* Map component send request to google map api and shows the map
**/
import Ember from 'ember';

export default Ember.Component.extend({  
    insertMap: function() {
        let shots = this.get('data');
    	var options = {
            center: new window.google.maps.LatLng(0, 0),
            zoom: 2
        }, map = new window.google.maps.Map(this.$('.map-canvas')[0], options),
        geocoder = new window.google.maps.Geocoder(),
    	infowindowEl = $('div.hidden section');
        shots.forEach(function (shot, i) {
        	geocodeAddress(geocoder, map, shot.get('user').get('location'), i);
        });
        function geocodeAddress(geocoder, resultsMap, location, i) {
        	// Google map throw query_limit error if too many request were made with in a shot span of time
        	setTimeout(function () {
        		geocoder.geocode({'address': location}, function(results, status) {
				if (status === window.google.maps.GeocoderStatus.OK) {
					if (i > 4) {
						return;
					}
					if(i===0) {
						resultsMap.setCenter(results[0].geometry.location);
					}
				  	drawMarker(results[0].geometry.location, i);
				}
				});
	        }, 250);
		}
		function drawMarker (location, i) {
			infowindowEl.eq(i).find('h4').text('Top '+ (i + 1));
			var marker = new window.google.maps.Marker({
				map: map,
				position: location
			}), infowindow = new window.google.maps.InfoWindow({
				content: infowindowEl.eq(i).html()
			});
			marker.addListener('click', function() {
				infowindow.open(map, marker);
			});
		}
        window.google.maps.event.addDomListener(window, 'resize', function() {
        	let winWidth = event.target.innerWidth;
        	if(winWidth < 750) { // resize map for smaller screen size
        		$('.map-canvas').width(winWidth - 50);
        	}
		    window.google.maps.event.trigger(map, 'resize');
		});
    }.on('didInsertElement')
});