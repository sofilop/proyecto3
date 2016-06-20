var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
  function initialize(){
	  
	 
	var directionsRerenderOptions = {
			markerOptions:{
				icon: new google.maps.MarkerImage("images/Oil-Barrel-icon.png")
	
			}
	};
	
	
	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setOptions(directionsRerenderOptions);
	var mexico_city = new google.maps.LatLng(22.1564699, -100.98554089999999);
	var my_options = {zoom: 5, mapTypeId:google.maps.MapTypeId.ROADMAP, center: mexico_city};
	var map = new google.maps.Map(document.getElementById('map-canvas'), my_options);
			directionsDisplay.setMap(map);
			
			var infoWindow2 = new google.maps.InfoWindow;
		    var onMarkerMouseOver = function() {
		      var latLng = this.getPosition();
		      infoWindow2.setContent('<h3>Mexico City</h3><br /><h2> Site Type:   petroleum </h2>Latitude= ' +
		          latLng.lat() + '<br>Longitude= ' + latLng.lng()+'<br><br><a href="http://en.wikipedia.org/wiki/Mexico_city"><img src="images/mexi.png " /></a>');
		      infoWindow2.open(map, this);
		    };
		    google.maps.event.addListener(map, 'mouseout', function() {
		      infoWindow2.close();
		    });
			

		   var mkr = new google.maps.Marker({
					draggable: true,
					icon : "images/pozo.gif",
					
					position:{lat: 19.4978, lng: -99.1269},
					map: map,
					title: 'Ciudad de Mexico'
					
				});
		    google.maps.event.addListener(mkr, 'mouseover', onMarkerMouseOver);
		    
		  
		    
		    
		    
		    
		    
	/*	<!--------------------aqui se agrega un marcador-------------------------->*/
			var infoWindow2 = new google.maps.InfoWindow;
	   
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow2.setContent('<h3>Campeche</h3><img src="images/cam.png" /><br /><h2> Site Type: petroleum  </h2><br>latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="https://en.wikipedia.org/wiki/Campeche_City">link to site</a>');
	      infoWindow2.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });
		
		
	  var mkr1 = new google.maps.Marker({
				draggable: true,
				icon : 'pozo1.gif',
				
				position:{lat: 18.866509, lng: -89.997500},
				map: map,
				title: 'Campeche'
			
			});
	 
			
		// The following call associated the onMarkerMouseOver function declared above
		// with the mouseover event.  See the Google maps reference information for
		// other events:  http://code.google.com/apis/maps/documentation/javascript/events.html
	    google.maps.event.addListener(mkr1, 'mouseover', onMarkerMouseOver);
		
		/*<!--------------------aqui se agrega un marcador-------------------------->*/
			var infoWindow1= new google.maps.InfoWindow;
	    // XXX this is the declaration of the onMarkerMouseOver function
	    // It is called when the 'mouseover' event occurs for marker1 
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow2.setContent('<h3>Tampico</h3><img src="images/tam.png" /><br /><h2> Site Type: petroleum  </h2><br>latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="http://en.wikipedia.org/wiki/Tampico">link to site</a>');
	      infoWindow2.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow1.close();
	    });
		
		// Create marker 1 here 
		// Mexico City, Mexico: (19.434, -99.138)
	  var mkr1 = new google.maps.Marker({
				draggable: true,
				icon : 'pozo1.gif',
				
				position:{ lat: 22.216  , lng: -97.850},
				map: map,
				title: 'Tampico'
			
			});
	 
			
		// The following call associated the onMarkerMouseOver function declared above
		// with the mouseover event.  See the Google maps reference information for
		// other events:  http://code.google.com/apis/maps/documentation/javascript/events.html
	    google.maps.event.addListener(mkr1, 'mouseover', onMarkerMouseOver);
		
		/*	<!--------------------aqui se agrega un marcador-------------------------->*/
			var infoWindow1 = new google.maps.InfoWindow;
	    // XXX this is the declaration of the onMarkerMouseOver function
	    // It is called when the 'mouseover' event occurs for marker1 
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>Veracruz</h3><img src="images/ver.png" /><br /><h2> Site Type:  petroleum </h2><br>latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="http://en.wikipedia.org/wiki/Veracruz">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow1.close();
	    });
		
		// Create marker 1 here 
		// Veracruz: ( 19.1738, -96.1342)
	  var mkr1 = new google.maps.Marker({
				draggable: true,
				icon : 'pozo1.gif',
				
				position:{ lat: 19.1738 , lng: -96.1342},
				map: map,
				title: 'Veracruz'
			
			});
	 
			
		// The following call associated the onMarkerMouseOver function declared above
		// with the mouseover event.  See the Google maps reference information for
		// other events:  http://code.google.com/apis/maps/documentation/javascript/events.html
	    google.maps.event.addListener(mkr1, 'mouseover', onMarkerMouseOver);
		
		
	/*	<!--------------------aqui se agrega un marcador-------------------------->*/
			var infoWindow1 = new google.maps.InfoWindow;
	    // XXX this is the declaration of the onMarkerMouseOver function
	    // It is called when the 'mouseover' event occurs for marker1 
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow1.setContent('<h3>Monterrey</h3><img src="images/mon.png" /><br /><h2> Site Type: petroleum  </h2><br>latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="https://en.wikipedia.org/wiki/Monterrey">link to site</a>');
	      infoWindow1.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow1.close();
	    });
		
		// Create marker 1 here 
		// Monterrey: ( lat: 25.6667,-100.3167)
	  var mkr1 = new google.maps.Marker({
				draggable: true,
				icon : 'pozo1.gif',
				
				position:{ lat: 25.6667, lng: -100.3167},
				map: map,
				title: 'Monterrey'
			
			});
	 
			
		// The following call associated the onMarkerMouseOver function declared above
		// with the mouseover event.  See the Google maps reference information for
		// other events:  http://code.google.com/apis/maps/documentation/javascript/events.html
	    google.maps.event.addListener(mkr1, 'mouseover', onMarkerMouseOver);
		
	
	    
	    
	    
		var infoWindow2 = new google.maps.InfoWindow;
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow2.setContent('<h3>San Luis Potosi</h3><img src="images/slp.png" /><br /><h2> Site Type: petroleum  </h2><br />latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="https://en.wikipedia.org/wiki/San_Luis_Potos%C3%AD_City">link to site</a>');
	      infoWindow2.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });
		
		// Create marker 1 here 
		// San Luis Potosi (23.116667, -101.099998)
	   var mkr = new google.maps.Marker({
				draggable: true,
				icon : 'pozo1.gif',
				
				position:{lat: 23.116667, lng: -101.099998},
				map: map,
				title: 'San Luis Potosi'
				
			});
	    google.maps.event.addListener(mkr, 'mouseover', onMarkerMouseOver);
	
	
	/**/
	    
	

	 
	
			
	/****/
	  
		var infoWindow2 = new google.maps.InfoWindow;
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow2.setContent('<h3>Salamca</h3><img src="images/sala.png" /><br /><h2> Site Type: petroleum  </h2><br>latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="https://en.wikipedia.org/wiki/Salamanca">link to site</a>');
	      infoWindow2.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });
		
		// Create marker 1 here 
		// Mexico City, Mexico: (19.434, -99.138)
	   var mkr = new google.maps.Marker({
				draggable: true,
				icon : 'pozo1.gif',
				
				position:{lat: 20.567, lng:-101.2},
				map: map,
				title: 'salamnca'
				
			});
	    google.maps.event.addListener(mkr, 'mouseover', onMarkerMouseOver);
	 
	    
	    /*-----*/
		var infoWindow2 = new google.maps.InfoWindow;
	    var onMarkerMouseOver = function() {
	      var latLng = this.getPosition();
	      infoWindow2.setContent('<h3>Oaxaca</h3><img src="images/oaxa.png" /><h2> Site Type:petroleum   </h2><br /><br>latitude=' +
	          latLng.lat() + ', longitude=' + latLng.lng()+'<br><br><a href="https://en.wikipedia.org/wiki/Oaxaca_City">link to site</a>');
	      infoWindow2.open(map, this);
	    };
	    google.maps.event.addListener(map, 'mouseout', function() {
	      infoWindow2.close();
	    });
		
		// Create marker 1 here 
		// Mexico City, Mexico: (19.434, -99.138)
	   var mkr = new google.maps.Marker({
				draggable: true,
				icon : 'pozo1.gif',
				
				position:{lat:  17.05, lng:-96.7167},
				map: map,
				title: 'Chihuahua'
				
			});
	    google.maps.event.addListener(mkr, 'mouseover', onMarkerMouseOver);
			
  }
  
	
  
  var robot;
  var totalr=0;
  var totalDis=0;
  var ac =new Array;
  var acs =new Array;
  var acuend=new Array;
  var arrbot= new Array;
  var arrkm =  new Array;
  
  
  function handleDirectionsResponse(start, end, directionsResult){
	directionsDisplay.setDirections(directionsResult);
	var routes = directionsResult.routes;
	 
	for(var i=0; i<routes.length; i++){
		var totalDistance = 0;
			
		var legs = routes[i].legs;
		for(j=0; j<legs.length; j++){
			totalDistance += legs[j].distance.value;
			
		var acumDis=acumDis+totalDistance;
		}
	
		document.getElementById("distance").innerHTML=Math.round(totalDistance/1000);
		var month = ((totalDistance/1000) /730)/0.1;
		
		
		
		if ((totalDistance/1000) <=403.2 ){
			robot = 1;	
		}if ((totalDistance/1000) >403.2 && (totalDistance/1000)<=806.4){
			robot = 2;
		}if ((totalDistance/1000) >806.4 && (totalDistance/1000)<=1209.6){
			robot = 3;
		}if ((totalDistance/1000) >1209.6 && (totalDistance/1000)<=1612.8){
			robot = 4;
		}if ((totalDistance/1000) >1612.8 && (totalDistance/1000)<=2016){
			robot = 5;
		}
	 totalr=totalr+robot;
	 totalDis=totalDis+(totalDistance/1000);
	 
	 
	
	   acs=acs + start +'<br />';
	   acuend=acuend+end+'<br />';

	   arrbot=arrbot+robot+'<br />';
	   
	   arrkm=arrkm+(totalDistance/1000)+'<br />';
	   
		document.getElementById("robot").innerHTML= robot;
		document.getElementById("distance").innerHTML=Math.round(totalDistance/1000);
		document.getElementById("meses").innerHTML= month.toFixed(2)/robot;
		
		document.getElementById("arrkm").innerHTML= arrkm;
		
		document.getElementById("arrbot").innerHTML= arrbot;
		document.getElementById("totalr").innerHTML= totalr;
		
		document.getElementById("totaldis").innerHTML= Math.round(totalDis);
		document.getElementById("endacum1").innerHTML= acuend +"\n";
		document.getElementById("cbostar").innerHTML= acs  ;

	
	}
	
  }
  function calcRoute(){
	var start = document.getElementById("start").value;
	var end = document.getElementById("end").value;
	var request = { origin: start, destination: end,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
	};
	directionsService.route(request, function(directionsResult, status){
		if(status==google.maps.DirectionsStatus.OK){
			
			handleDirectionsResponse(
					start, end, directionsResult);
		}	
	});
	
	
	/**/
	var request = {
			origin:start,
			destination:end,
			travelMode: google.maps.TravelMode.DRIVING
			};	
	
}
  
  
  