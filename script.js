function geoFindMe() {

    const coordinatesElement = document.getElementById("coordinates");

    function success(position) {
        console.log(position);
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        coordinatesElement.textContent = `latitude : ${latitude}, longitude : ${longitude}`;
    }

    function error() {
        coordinatesElement.textContent = 'Unable to retrieve your location';
    }

    if (!navigator.geolocation) {
        coordinatesElement.textContent = 'Geolocation is not supported by your browser';
    } else {
        coordinatesElement.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

geoFindMe();

