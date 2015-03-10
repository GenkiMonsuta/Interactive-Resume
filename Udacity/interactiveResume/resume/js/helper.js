var HTMLheaderName = '<a class="navbar-brand" href="#" id="mainTitle">%data%</a>';
var HTMLheaderRole = '<span id="subTitle">%data%</span>';

var HTMLmobile = 'call me during working hours on: <br><span id="phoneNumber">%data%</span><br><br>or send me an e-mail 24/7 <br>';
var HTMLemail = '<span id="emailAdj">(%data%)</span>';
var HTMLtwitter = 'Check me out on: <br>&nbsp; &middot; &nbsp;<a href="%data%">Twitter</a>';
var HTMLgithub = '&nbsp; &middot; &nbsp;<a href="%data%">Github</a>&nbsp; &middot; &nbsp; <br><br>';
var HTMLlocation = 'Make an appointment below and visit me at: <br><span id="stekBel">%data%</span><br><br>';

var HTMLbioPic = '<img class="img-circle" src="%data%" alt="profile picture">';
var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskills = '<span>%data%</span>';

var HTMLworkEmployer = '<h3 class="featurette-heading">%data% ';
var HTMLworkTitle = ' <span class="text-muted"> - %data%</span></h3>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p class="lead">%data%</p><hr class="projectDivider">';


var HTMLprojectStart = '<div class="col-lg-4 projectWrap"></div>';
var HTMLprojectTitle = '<h2>%data%</h2>';
var HTMLprojectModalId = 'data-toggle="modal" data-target="%data%">';
var HTMLprojectDates = '<span style="font-size: 15px">%data%</span>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = ' <img class="img-circle projectCircle" id="bird" src="%data%" alt="birder project" ';

var HTMLcomingprojectStart = '<div class="col-lg-4 comingprojectWrap"></div>';
var HTMLcomingprojectTitle = '<h2>%data%</h2>';
var HTMLcomingprojectDescription = '<p>%data%</p>';
var HTMLcomingprojectImage = ' <img class="img-circle projectCircle" src="%data%" alt="birder project">';

var HTMLmodalId = '<div class="modal fade" id="%data%" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
var HTMLmodalTitle = '<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">%data%</h4>';
var HTMLmodalImage = '</div><div class="modal-body"><img src="%data%" alt="screenshot of birding project">';
var HTMLmodalDescription = '%data%</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';

var HTMLschoolStart = '<hr class="projectDivider"> <br>I have received an <span style="font-size: 30px">Education </span>at the following institutes:';
var HTMLschoolUrl = '<br><span><a href="%data%">';
var HTMLschoolName = ' %data%</a> ';
var HTMLschoolDegree = '%data%';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<span style="font-size: 11px"> %data%</span></span><br>';
var HTMLschoolMajor = '<em><br>Major: %data%</em><br>';

var HTMLonlineClasses = '<hr class="projectDivider"><br>Furthermore I have attended the following <span style="font-size: 30px">Online Courses:</span>';
var HTMLonlineTitle = '<br>%data%<br>';
var HTMLonlineSchool = '<br>%data%</a>';
var HTMLonlineDates = '<span style="font-size: 11px">%data%</span></span>';
var HTMLonlineURL = '<span><a href="%data%">';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*




The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.

$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
});
*/
/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }
    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {

        infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {
      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();
  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}




// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);
// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
map.fitBounds(mapBounds);
});
