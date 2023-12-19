// API Key
const apiKey = "&appid=b48d833200fd293d9f5e206ca699d94b";

// Sets the search city
var cityName = "";

// DOM Elements
var inputEl = document.querySelector(".search-input");
var searchBtnEl = document.querySelector(".search-button");

function recordCityData() {
  localStorage.setItem("cityNameStore", inputEl.value);
}

// Current Weather URL
// let currentWeather =
//   "https://api.openweathermap.org/data/2.5/weather?q=" +
//   cityName +
//   "&units=metric" +
//   apiKey;

// 5 day Forcast URL
let forcastURL =
  "api.openweathermap.org/data/2.5/forecast?q=" +
  cityName +
  "&units=metric" +
  apiKey;

var getCurrentConditions = (event) => {
  // Obtain city name from the search box
  cityName = $("#search-input").val();
  let currentWeather =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&units=metric" +
    apiKey;
  fetch(currentWeather)
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  //   .then((response) => {
  // }
};

// New city search button event listener
$("#search-button").on("click", (event) => {
  event.preventDefault();
  cityName = $("#search-input").val();
  getCurrentConditions(event);
});
