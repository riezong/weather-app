// Visual Crossing API
async function getWeather(city) {
  let targetCity = city;
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      city +
      "?unitGroup=us&key=Z8MVH2E3J6MWQFJL75YCGKAYV&contentType=json",
    { mode: "cors" },
  );
  const JSONdata = await response.json();
  // console.log(JSONdata);

  function getLocation() {
    let location = JSONdata.address;
    return location;
  }

  function getTime() {
    let time = JSONdata.currentConditions.datetime;
    return time;
  }

  function getTemp() {
    let tempF = JSONdata.currentConditions.temp;
    tempF = Math.round(tempF * 100) / 100;
    let tempC = ((tempF - 32) * 5) / 9;
    tempC = Math.round(tempC * 100) / 100;
    return { tempF, tempC };
  }

  function getCondition() {
    let conditions = JSONdata.currentConditions.conditions;
    return conditions;
  }

  return { getLocation, getTime, getTemp, getCondition };
}

// Pause execution until the getWeather Promise resolves.
async function processWeatherData(targetCity) {
  try {
    const weatherFunctions = await getWeather(targetCity);

    const location = weatherFunctions.getLocation();
    const time = weatherFunctions.getTime();
    const temperatures = weatherFunctions.getTemp();
    const condition = weatherFunctions.getCondition();

    console.log("Location:", location);
    console.log("Time:", time);
    console.log("Temperature (F/C):", temperatures);
    console.log("Condition:", condition);

    const div = document.querySelector(".weather-data");
    div.textContent =
      "Location: " +
      location +
      " Time: " +
      time +
      " Temperature (C): " +
      temperatures.tempC +
      " Condition: " +
      condition;
  } catch (error) {
    console.error("Error fetching or processing weather data:", error);
  }
}

export default processWeatherData;
