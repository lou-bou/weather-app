import { getGifURL } from "./retrievalGif.js";
import { formatCityName, getCondition } from "./utilities.js";

export {
  updateWeatherDOM,
  displayErrorDOM,
  clearErrorDOM,
  clearWeatherDOM,
  activateLoaderComponent,
  deactivateLoaderComponent,
};

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

  updateBackgroundGif(parsedWeatherData.conditions);
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

  clearBackgroundGif();
}

function displayErrorDOM() {
  const errorContainer = document.querySelector("#error-container");

  errorContainer.innerText =
    "An error has occurred!\nPlease make sure you entered a valid city name.";

  clearWeatherDOM();
}

function clearErrorDOM() {
  const errorContainer = document.querySelector("#error-container");

  errorContainer.innerHTML = "";
}

function activateLoaderComponent() {
  const loaderComponent = document.querySelector(".loader");

  loaderComponent.classList.add("active");
}

function deactivateLoaderComponent() {
  const loaderComponent = document.querySelector(".loader");

  loaderComponent.classList.remove("active");
}

async function updateBackgroundGif(conditions) {
  const condition = getCondition(conditions);

  const gifURL = await getGifURL(condition); // get a corresponding gif to the weather condition. using await because the function is async

  if (gifURL) {
    const body = document.querySelector("body");

    body.setAttribute("style", `background-image: url(${gifURL})`); // set background to gif
    body.classList.add("animated"); // for extra styling
  }
}

function clearBackgroundGif() {
  // return it to default background (--black)
  const body = document.querySelector("body");

  body.setAttribute("style", "background-image: none");
  body.classList.remove("animated");
}
