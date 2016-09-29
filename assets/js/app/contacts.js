"use strict";

import "jquery";
import "jquery-validation";

import GoogleMapsLoader from "google-maps";

GoogleMapsLoader.KEY = "AIzaSyDWQ8KabiEnj1NhMT93d-LqytUlFZYIZxk";


GoogleMapsLoader.load((google) => {

    new google.maps.Map(document.querySelector("#map"), {
        center: {
            lat: 50.4490911,
            lng: 30.5146251
        },
        //disableDefaultUI: true,
        //scrollwheel: false,
        zoom: 18
    });

});