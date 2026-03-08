import { formatCityName } from "./utilities.js";

export { updateWeatherDOM, displayErrorDOM, clearErrorDOM };

function updateWeatherDOM(parsedWeatherData) {
  const name = document.querySelector(".name.result");
  name.textContent = formatCityName(parsedWeatherData.name);

  const conditions = document.querySelector(".conditions.result");
  conditions.textContent = parsedWeatherData.conditions;

  const description = document.querySelector(".description.result");
  description.textContent = parsedWeatherData.description;

  const temp = document.querySelector(".temp.result");
  temp.textContent = `${parsedWeatherData.temp} °C`;

  const feelslike = document.querySelector(".feelslike.result");
  feelslike.textContent = `${parsedWeatherData.feelslike} °C`;

  const cloudcover = document.querySelector(".cloudcover.result");
  cloudcover.textContent = `${parsedWeatherData.cloudcover}%`;

  const humidity = document.querySelector(".humidity.result");
  humidity.textContent = `${parsedWeatherData.humidity}%`;
}

function clearWeatherDOM() {
  const name = document.querySelector(".name.result");
  name.textContent = "N/A";

  const conditions = document.querySelector(".conditions.result");
  conditions.textContent = "N/A";

  const description = document.querySelector(".description.result");
  description.textContent = "N/A";

  const temp = document.querySelector(".temp.result");
  temp.textContent = "N/A";

  const feelslike = document.querySelector(".feelslike.result");
  feelslike.textContent = "N/A";

  const cloudcover = document.querySelector(".cloudcover.result");
  cloudcover.textContent = "N/A";

  const humidity = document.querySelector(".humidity.result");
  humidity.textContent = "N/A";
}

function displayErrorDOM() {
  const errorContainer = document.querySelector("#error-container");

  errorContainer.textContent =
    "An error has occurred! Please make sure you enter a valid city name.";

  clearWeatherDOM();
}

function clearErrorDOM() {
  const errorContainer = document.querySelector("#error-container");

  errorContainer.innerHTML = "";
}
