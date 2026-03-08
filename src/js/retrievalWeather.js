export { getWeatherData, parseWeatherData };

const API_KEY = "84M5LFTYLP8TAY5A35RCZT6CW";

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?unitGroup=metric&key=${API_KEY}`,
    );

    const weatherData = await response.json();

    return weatherData;
  } catch (error) {
    return error;
  }
}

function parseWeatherData(weatherData) {
  const parsedData = {
    name: weatherData.address,
    conditions: weatherData.currentConditions.conditions,
    temp: weatherData.currentConditions.temp,
    feelslike: weatherData.currentConditions.feelslike,
    cloudcover: weatherData.currentConditions.cloudcover,
    humidity: weatherData.currentConditions.humidity,
    windspeed: weatherData.currentConditions.windspeed,
    description: weatherData.description,
  };

  return parsedData;
}
