import processWeatherData from "./weather-API";

async function renderWeatherData(city) {
  const weatherData = await processWeatherData(city);
  console.log(weatherData);

  let location = weatherData.location;
  let time = weatherData.time;
  let temp = weatherData.temperatures;
  let conditions = weatherData.conditions;

  const div = document.querySelector(".weather-data");
  div.textContent =
    "Location: " +
    location +
    " Time: " +
    time +
    " Temperature (C): " +
    temp.tempC +
    " Condition: " +
    conditions;
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
