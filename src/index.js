import { clearErrorDOM, displayErrorDOM, updateWeatherDOM } from "./js/dom.js";
import { getWeatherData, parseWeatherData } from "./js/retrieval.js";

const form = document.querySelector("form");
let location;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  location = form.search.value;

  form.search.value = ""; // clear it after

  try {
    const weatherData = await getWeatherData(location);
    const parsedWeatherData = parseWeatherData(weatherData);

    clearErrorDOM(); // clear error container in HTML from any previous error messages

    updateWeatherDOM(parsedWeatherData);
  } catch (error) {
    console.log(error);
    displayErrorDOM();
  }
});
