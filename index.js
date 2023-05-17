const currentLocation = document.getElementById("location");
const currentWeather = document.getElementById("current");
const currentPic = document.getElementById("current-pic");
const currentTemp = document.getElementById("temp");
const feelsLike = document.getElementById("feels-like");
const currentHumid = document.getElementById("humidity");
const currentWind = document.getElementById("wind");

const searchBar = document.getElementById("search");
const searchSubmit = document.getElementById("submit");

let weatherCurrent;
function createWeather(location, img, weather, temp, feel, humid, wind) {
  return {
    location: location,
    img: img,
    weather: weather,
    temp: temp,
    feel: feel,
    humid,
    humid,
    wind: wind,
  };
}

function searchWeather(location) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=92506e3ad17146d28bd121434231705&q=${location}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      currentLocation.innerText = response.location.name;
      currentPic.src = response.current.condition.icon;
      currentWeather.innerText = response.current.condition.text;
      currentTemp.innerText = response.current.temp_c;
      feelsLike.innerText = response.current.feelslike_c;
      currentHumid.innerText = response.current.humidity;
      currentWind.innerText = response.current.wind_mph;

      //   console.log(weatherCurrent);
    });
}

searchSubmit.addEventListener("click", function () {
  let tempLocation = searchBar.value;
  searchWeather(tempLocation);
});
searchWeather("Belfast");
