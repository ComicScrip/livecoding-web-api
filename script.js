function geoFindMe() {

    const coordinatesElement = document.getElementById("coordinates");

    function success(position) {
        console.log(position);
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        coordinatesElement.textContent = `latitude : ${latitude}, longitude : ${longitude}`;

        let map = L.map('map', {
            center: [latitude, longitude],
            zoom: 13
        })
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([latitude, longitude]).addTo(map);
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

