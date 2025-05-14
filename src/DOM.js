import processWeatherData from "./weather-API";
import GIPHY from "./Giphy-API";

function capitalise(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
capitalise("word");

async function renderWeatherData(city) {
  const weatherData = await processWeatherData(city);
  console.log(weatherData);

  let location = weatherData.location;
  location = capitalise(location);
  let coordinates = weatherData.coordinates;
  let time = weatherData.time;
  let temp = weatherData.temperatures;
  let conditions = weatherData.conditions;

  const div = document.querySelector(".weather-data");
  div.textContent =
    "Location: " +
    location +
    " Coordinates: " +
    coordinates.latitude +
    "," +
    coordinates.longitude +
    " Time: " +
    time +
    " Temperature (C): " +
    temp.tempC +
    " Condition: " +
    conditions;

  GIPHY(conditions);
}

function DOM() {
  renderWeatherData("sydney"); // Sydney by default

  const searchCityInput = document.querySelector("#searchCityInput");
  const searchCityBtn = document.querySelector("#searchCityBtn");

  function searchCity() {
    console.log(searchCityInput.value);
    renderWeatherData(searchCityInput.value);
    searchCityInput.value = "";
  }

  searchCityBtn.addEventListener("click", searchCity);
}

export { DOM };
