//Time

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let h4 = document.querySelector("h4");
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
h4.innerHTML = `${day}, ${hour}:${minute}`;

//Search Location Temp Results

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "14b403338547ae85381bcc96119486e3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayTemp(response) {
  console.log(response.data);

  let temperatureElement = document.querySelector("#temp");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#weatherIcon");
  let weatherElement = document.querySelector("#weather-description");

  celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  weatherElement.innerHTML = response.data.weather[0].description;

  getForecast(response.data.coord);
}

function search(city) {
  let apiKey = "14b403338547ae85381bcc96119486e3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search-input");
  search(searchInput.value);
  let city = document.querySelector("#search-result");
  city.innerHTML = searchInput.value;
}

function displayFahrenheitTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  let fahrenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemp);
}

function displayCelciusTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}
let celsiusTemperature = null;

let form = document.querySelector("#search-bar");
form.addEventListener("submit", searchCity);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelciusTemp);

function displayForecast(response) {
  console.log(response.data.daily);
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  let days = ["Thursday", "Friday", "Saturday", "Sunday", "Monday"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `<div class="col">
                        <div class="card">
                          <div class="card-body">
                            <div class="card-header">
                              <h6 class="card-title weather-forecast-date">
                                ${day}
                              </h6>
                            </div>
                            <ul class="ul-forecast">
                              <li class="list-group-item">
                                High
                                <span id="max-forecast-temperature">22</span>°C
                              </li>
                              <li class="list-group-item">
                                <img
                                  src="http://openweathermap.org/img/wn/04d@2x.png"
                                  width="85px"
                                />
                              </li>
                              <li class="list-group-item">
                                Low
                                <span id="min-forecast-temperature">9</span>°C
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>`;
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  console.log(forecastHTML);
}

search("Mombasa");
