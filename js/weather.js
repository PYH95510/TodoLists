const API_KEY = "";


function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metrics`
    fetch(url); //by using fetch, we call and bring the url.

}


function onGeoError(){
    alert("unalbe to get the weather");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);
