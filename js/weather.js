const API_KEY = "3c031fe5cf31d48043061b64ec650394";


function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metrics`
    fetch(url);

}


function onGeoError(){
    alert("unalbe to get the weather");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);