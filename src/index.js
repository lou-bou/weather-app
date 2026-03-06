import { getWeatherData, parseWeatherData } from "./js/retrieval.js";

const form = document.querySelector("form");
let location;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  location = form.search.value;

  form.search.value = ""; // clear it after

  const weatherData = await getWeatherData(location);
  const parsedWeatherData = parseWeatherData(weatherData);

  console.log(parsedWeatherData);
});
