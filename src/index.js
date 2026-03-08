import "./styles.css";

import {
  activateLoaderComponent,
  clearErrorDOM,
  clearWeatherDOM,
  deactivateLoaderComponent,
  displayErrorDOM,
  updateWeatherDOM,
} from "./js/dom.js";
import { getWeatherData, parseWeatherData } from "./js/retrievalWeather.js";

const form = document.querySelector("form");
let location;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  activateLoaderComponent();

  location = form.search.value;

  form.search.value = ""; // clear it after

  try {
    const weatherData = await getWeatherData(location);
    const parsedWeatherData = parseWeatherData(weatherData);

    clearErrorDOM(); // clear error container in HTML from any previous error messages
    clearWeatherDOM();

    updateWeatherDOM(parsedWeatherData);
    deactivateLoaderComponent();
  } catch (error) {
    console.log(error);
    displayErrorDOM();
    deactivateLoaderComponent();
  }
});
