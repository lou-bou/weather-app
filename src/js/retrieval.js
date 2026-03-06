export { getWeatherData };

const API_KEY = "84M5LFTYLP8TAY5A35RCZT6CW";

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${API_KEY}`,
    );

    const weatherData = await response.json();

    return weatherData;
  } catch (error) {
    return error;
  }
}
