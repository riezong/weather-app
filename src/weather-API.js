// Visual Crossing API
async function getWeather(city) {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      city +
      "?unitGroup=us&key=Z8MVH2E3J6MWQFJL75YCGKAYV&contentType=json",
    { mode: "cors" },
  );
  const JSONdata = await response.json();
  // console.log(JSONdata);
  return JSONdata;
}

// Pause execution until the getWeather Promise resolves.
async function processWeatherData(city) {
  try {
    const weatherFunctions = await getWeather(city);

    const location = weatherFunctions.address;
    const latitude = weatherFunctions.latitude;
    const longitude = weatherFunctions.longitude;
    const coordinates = { latitude, longitude };
    const time = weatherFunctions.currentConditions.datetime;

    let tempF = weatherFunctions.currentConditions.temp;
    tempF = Math.round(tempF * 100) / 100;
    let tempC = ((tempF - 32) * 5) / 9;
    tempC = Math.round(tempC * 100) / 100;
    const temperatures = { tempF, tempC }; // Store both F and C in an object

    const conditions = weatherFunctions.currentConditions.conditions;

    console.log("Location:", location);
    console.log("Coordinates: ", coordinates);
    console.log("Time:", time);
    console.log("Temperature (F/C):", temperatures);
    console.log("Condition:", conditions);

    return {
      location: location,
      coordinates: coordinates,
      time: time,
      temperatures: temperatures,
      conditions: conditions,
    };
  } catch (error) {
    console.error("Error fetching or processing weather data:", error);
  }
}

export default processWeatherData;
