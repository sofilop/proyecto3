/**
 * 
 */
google.maps.event.addDomListener(Window,'load',function(){
	var map=new google.maps.Map(document.getElementById('map'),{
		zoom:6,
	center:new google.maps.LatLng(19.434, -99.138),
	mapType:google.map.MapTyped.ROADMAP
	
	});
	
	var info=new google.maps.InfoWindow;
	var onMarkerClick=Function(){
		var marker=this;
		var latLng=marker.getPosition();
		info.setContent('<h3>Quiroga</h3><img src="images/quiroga.jpg />');
		info.open(map, marker);
			
	};
	
	google.maps.event.addListener(map, 'mouseout', function(){
		info.close();
	});
	var iconMarker=new google.maps.MarkerImage('images/oli_well.png');
	var marker =new google.maps.Marker({
		map:map,
		position: new google.maps.LatLng(52.3 , -76.95),
		icon:iconMarker
	});	
	google.maps.event.addListener(marker,'click',onMarker);

});