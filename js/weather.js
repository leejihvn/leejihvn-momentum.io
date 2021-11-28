const API_KEY = "d6acf62fba411361ac7ae45dd843539e";

//const lat = 37.640374; // geolocation 불가로 임시로 지정..
//const log = 126.677542; // geolocation 불가로 임시로 지정..

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(position){
    alert("Can't find you. No weather for you.");
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    console.log(lat,log);
}

//onGeoOk()

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // <-- https가 아니라서 API 호출 불가..