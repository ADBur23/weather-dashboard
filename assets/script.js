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
const currentWeather =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  cityName +
  "&units=metric" +
  apiKey;

// 5 day Forcast URL
const forcastURL =
  "api.openweathermap.org/data/2.5/forecast?q=" +
  cityName +
  "&units=metric" +
  apiKey;

// Displays the date
var currentDay = dayjs().format("dddd, MMMM Do");

// fetch(
//   "https://api.openweathermap.org/data/2.5/forecast?        q=london&appid=[api-key]&units=metric"
// )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
