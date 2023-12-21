// API Key
const apiKey = "&appid=b48d833200fd293d9f5e206ca699d94b";
const todayContainer = $("#today");
const forcastContainer = $("#forcast");

// DOM Elements
// var inputEl = document.querySelector(".search-input");
// var searchBtnEl = document.querySelector(".search-button");

// function recordCityData() {
//   localStorage.setItem("cityNameStore", inputEl.value);
// }

// Current Weather URL
// let currentWeather =
//   "https://api.openweathermap.org/data/2.5/weather?q=" +
//   cityName +
//   "&units=metric" +
//   apiKey;

// 5 day Forcast URL

var getCurrentConditions = (cityName) => {
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
      // Create icon for the current weather using Open Weather Maps
      let currentWeatherIcon =
        "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      //   we need to create the following elements: h2 for the data the city name and the icon, p element for temp, wind and humidity data
      // once the elements are created and content is added to them we need to append them to the today container
      const dataDate = new Date(data.dt * 1000);
      const weatherImg = $("<img>").attr("src", currentWeatherIcon);

      console.log(dataDate.toLocaleDateString());

      const currentDayTitle = $("<h2>").text(
        data.name + " " + dataDate.toLocaleDateString()
      );

      const temp = $("<p>").text("Temp: " + data.main.temp + "C");
      const wind = $("<p>").text("Wind: " + data.wind.speed + " mph");
      const humidity = $("<p>").text("Humidity: " + data.main.humidity + "%");

      currentDayTitle.append(weatherImg);
      todayContainer.append(currentDayTitle, temp, wind, humidity);
    });
};

// Function to obtain the five day forecast and display to HTML
var getFiveDayForecast = (cityName) => {
  // Set up URL for API search using forecast search
  let forcastURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&units=metric" +
    apiKey;

  // Fetch from API
  fetch(forcastURL)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        let forcastDate = $(".card-title-" + [i]).text(
          dayjs(response[i * 7].dt_txt).format("DD/MM/YY")
        );
        let forcastTemp = $(".temp-" + [i]).text(
          "Temp: " + Math.round(response[i * 7].main.temp + "°C")
        );
        let forcastWind = $(".wind-" + [i]).text(
          "Wind: " + response[i * 7].wind.speed + " MPH"
        );
        let forcastHum = $(".humidity-" + [i]).text(
          "Humidity: " + response[i * 7].main.humidity + "%"
        );
        let forcastPic = $(".weather-pic-" + [i]).attr(
          "src",
          "https://openweathermap.org/img/w/" +
            response[i * 7].weather[0].icon +
            ".png"
        );

        forcastContainer.append(
          forcastDate,
          forcastTemp,
          forcastWind,
          forcastHum,
          forcastPic
        );
        // HTML template
        //   let fiveDayForecastHTML = `
        //     <h2>Five-Day Forecast:</h2>
        //     <div id="fiveDayForecastUl" class="d-inline-flex flex-wrap ">`;

        //   // Build the HTML template
        //   fiveDayForecastHTML += `</div>`;

        //   // Append the five-day forecast to the DOM
        //   $("#five-day-forecast").html(fiveDayForecastHTML);

        //   // Set the header text to the found city name
        //   $("#header-text").text(response.name);

        // HTML for the results of search
        //   let currentWeatherHTML = `
        //               <h3>${response.name} ${currentMoment.format(
        //     "(MM/DD/YY)"
        //   )}<img src="${currentWeatherIcon}"></h3>
        //               <ul class="list-unstyled">
        //                   <li>Temperature: ${response.main.temp}&#x2103;</li>
        //                   <li>Humidity: ${response.main.humidity}%</li>
        //                   <li>Wind Speed: ${response.wind.speed} m/s</li>
        //               </ul>`;

        //   // Append the results to the DOM
        //   $("#current-weather").html(currentWeatherHTML);
      }
      //   forcastContainer.append(card - title, temp, wind, humidity);
    });
};

function userInput(event) {
  event.preventDefault();

  var cityName = $("#search-input").val();
  getCurrentConditions(cityName);
  getFiveDayForecast(cityName);
}

// New city search button event listener
$("#search-form").on("submit", userInput);

// Displays the date
// var currentDay = dayjs().format("dddd, MMMM Do");

// fetch(currentWeather)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// function functionDay() {
//     $(".current-date").text(currentDay);
//   }
//   functionDay();

//   $("search-button").on("click", function () {
//     console.log(forcastURL);
//   });
