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

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row gy-3">`;
  forecastHTML =
    forecastHTML +
    `                <div class="col-sm">
                        <div class="card d-inline-flex p-2 bd-highlight">
                          <div class="card-body">
                            <h6 class="card-title weather-forecast-date">
                              Monday
                            </h6>
                            <ul>
                              <li class="list-group-item">
                                High
                                <span id="max-forecast-temperature">22</span>°C
                              </li>
                              <li class="list-group-item">
                                <img
                                  src="http://openweathermap.org/img/wn/04d@2x.png"
                                  width="48px"
                                />
                              </li>
                              <li class="list-group-item">
                                Low
                                <span id="min-forecast-temperature">9</span>°C
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>`;
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  forecastHTML =
    forecastHTML +
    `                <div class="col-sm">
                        <div class="card d-inline-flex p-2 bd-highlight">
                          <div class="card-body">
                            <h6 class="card-title weather-forecast-date">
                              Monday
                            </h6>
                            <ul>
                              <li class="list-group-item">
                                High
                                <span id="max-forecast-temperature">22</span>°C
                              </li>
                              <li class="list-group-item">
                                <img
                                  src="http://openweathermap.org/img/wn/04d@2x.png"
                                  width="48px"
                                />
                              </li>
                              <li class="list-group-item">
                                Low
                                <span id="min-forecast-temperature">9</span>°C
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>`;
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

displayForecast();
search("Mombasa");

function save() {
  forecastHTML =
    forecastHTML +
    `                <div class="col-sm">
                        <div class="card d-inline-flex p-2 bd-highlight">
                          <div class="card-body">
                            <h6 class="card-title weather-forecast-date">
                              Monday
                            </h6>
                            <ul>
                              <li class="list-group-item">
                                High
                                <span id="max-forecast-temperature">22</span>°C
                              </li>
                              <li class="list-group-item">
                                <img
                                  src="http://openweathermap.org/img/wn/04d@2x.png"
                                  width="48px"
                                />
                              </li>
                              <li class="list-group-item">
                                Low
                                <span id="min-forecast-temperature">9</span>°C
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>`;
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}
