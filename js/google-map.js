$(document).ready(function(){
	// Location detail area load map
	function initialize() {
		var myCenter = new google.maps.LatLng(40.5456, -74.4608);
		var mapProp = {
			center : myCenter,
			zoom : 11,
			mapTypeId : google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
		};
		var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
		var marker = new google.maps.Marker({
			position : myCenter,
			icon : '<i class="icon-map-pin"></i>'
		});
		marker.setMap(map);
	}
	
	if(document.getElementById('googleMap') != null ){
		google.maps.event.addDomListener(window, 'load', initialize);
	}
	
	// Proprty detail page get direction
	function initAutocomplete() {
	    
	    var directionsService = new google.maps.DirectionsService;
	    var directionsDisplay = new google.maps.DirectionsRenderer;
	    
	    var map = new google.maps.Map(document.getElementById('GoogleMapGetDirections'), {
	        center: {lat: 60.5456, lng: -84.4608},
	        zoom: 6,
	        mapTypeId : google.maps.MapTypeId.ROADMAP,
	        scrollwheel: false,
	        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
	    });
	
	    var marker = new google.maps.Marker({
	        position : {lat: 60.5456, lng: -84.4608},
	        icon : '<i class="icon-map-pin"></i>'
	    });
	    marker.setMap(map);
	    
	    directionsDisplay.setMap(map);
	
	    var onChangeHandler = function() {
	        calculateAndDisplayRoute(directionsService, directionsDisplay, marker);
	    };
	
	    document.getElementById('GetDirections').addEventListener('click', onChangeHandler);
	
	    autocomplete = new google.maps.places.Autocomplete((document.getElementById('GetDirectionsAddress')),{types: ['geocode']});  
	}
	
	function calculateAndDisplayRoute(directionsService, directionsDisplay, marker) {
	    directionsService.route({
	        origin: "Society Hill, Piscataway Township, NJ 08854, USA",
	        destination: document.getElementById('GetDirectionsAddress').value,
	
	        travelMode: google.maps.TravelMode.DRIVING
	        }, function(response, status) {
	        if (status === google.maps.DirectionsStatus.OK) {
	            marker.setVisible(false);
	            directionsDisplay.setDirections(response);
	        } else {
	            window.alert('Directions request failed due to ' + status);
	        }
	    });
	}
	if(document.getElementById('GetDirectionsAddress') != null ){
		google.maps.event.addDomListener(window, 'load', initAutocomplete);
	}
	
	// Property listing map page load map
	function property_listing_map_initialize() {
	    var map;
	    var bounds = new google.maps.LatLngBounds();
	    var mapOptions = {
	        mapTypeId: 'roadmap',
	        scrollwheel: false,
			styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
	    };
	                    
	    // Display a map on the page
	    map = new google.maps.Map(document.getElementById("property-listing-map"), mapOptions);
	    map.setTilt(45);
	        
	    // Multiple Markers
	    var markers = [
	        //['London Eye, London', 41.779092486865565, -95.87621874843751],
	        ['Palace of Westminster, London', 41.565728216555, -95.44775195156251],
	        ['Palace of Westminster, London', 41.35165702835402, -95.94213671718751],
	        ['Palace of Westminster, London', 41.50404943210524, -96.39806933437501],
	        ['Palace of Westminster, London', 41.615028892325036, -96.33764452968751],
	        //['Palace of Westminster, London', 41.45054691624652, -96.04101367031251]
	    ];
	                        
	    // Info Window Content
	  //  var infoWindowContent = [
//	        ['<div class="">' +
//	            '<div class="image-with-label">' +
//	                '<img src="" alt="" class="img-responsive">' +
//	                '<label></label>' +
//	            '</div>' + 
//	            '<div class=""> ' +
//	                '<a href="#"><h4></h4></a> ' +
//	                '<p class=""></p> ' +
//	                '<h6></h6>' +
//					'<h6></h6>' +
//	            '</div>'],
//	    ];
	        
	    // Display multiple markers on a map
	    var infoWindow = new google.maps.InfoWindow({Width: 365,Height: 350}), marker, i;
	    
	    // Loop through our array of markers & place each one on the map  
	    for( i = 0; i < markers.length; i++ ) {
	        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
	        bounds.extend(position);
	        marker = new google.maps.Marker({
	            position: position,
	            map: map,
	            title: markers[i][0],
	            icon : 'images/map_marker.png'
	        });
	        
	        // Allow each marker to have an info window    
	        google.maps.event.addListener(marker, 'click', (function(marker, i) {
	            return function() {                
	                infoWindow.setContent(infoWindowContent[i][0]);
	                infoWindow.open(map, marker);
	            }
	        })(marker, i));
	
	        // Automatically center the map fitting all markers on the screen
	        map.fitBounds(bounds);
	    }
	
	    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
	    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
	        google.maps.event.removeListener(boundsListener);
	    });
	}
	if(document.getElementById('property-listing-map') != null ){
		google.maps.event.addDomListener(window, 'load', property_listing_map_initialize);
	}	
});