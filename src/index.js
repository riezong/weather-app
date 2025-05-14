import "./styles.css";
import processWeatherData from "./weather-API";

// Features: location search, toggle between F and C, dynamically change visuals based on data (maybe show relevant GIF)

const searchCityInput = document.querySelector("#searchCityInput");
const searchCityBtn = document.querySelector("#searchCityBtn");

function searchCity() {
  console.log(searchCityInput.value);
  searchCity.value = "";
  processWeatherData(searchCityInput.value);
}

document.addEventListener("DOMContentLoaded", () => {
  processWeatherData("sydney");
  searchCityBtn.addEventListener("click", searchCity);
});
