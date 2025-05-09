import { fetchData, fetchSuggestions } from "./modules/fetchWeather.js";

import {
  showLoading,
  hideLoading,
  showError,
  hideError,
  renderWeather,
} from "./modules/ui.js";
import { cacheData, getCachedItem } from "./modules/cache.js";
const searchBtn = document.querySelector("#get-weather");
const inputEl = document.querySelector("#city-input");
const weatherResultEl = document.querySelector("#weather-result");
const errorEl = document.querySelector("#error-message");
const suggestionBox = document.querySelector("#suggestions");
document.addEventListener("DOMContentLoaded", () => {
  handleInput();
  attachClick();
});

const renderError = (errorText) => {
  errorEl.textContent = errorText;
  showError(errorText);
};
const handleInput = () => {
  inputEl.addEventListener("input", async () => {
    searchBtn.disabled = inputEl.value.trim().length < 3;
    if (inputEl.value.length < 3) {
      renderError("Enter at least 3 characters.");

      // Add shake class to input
      inputEl.classList.add("shake");

      // Remove it after animation ends (clean reset)
      setTimeout(() => {
        inputEl.classList.remove("shake");
      }, 400);
      suggestionBox.innerHTML = "";
      return;
    } else {
      hideError();
      const suggestions = await fetchSuggestions(inputEl.value);
      renderSuggestions(suggestions);
    
      return;
    }
  });
};
const attachClick = () => {
  searchBtn.addEventListener("click", async () => handleUI(inputEl.value));
};

const handleUI = async (searchValue) => {
  weatherResultEl.classList.remove("show");

  if (!searchValue) {
    showError("Please enter a city.");
    hideLoading();
    return;
  } else {
    hideError();
    showLoading();
    let resData = getCachedItem(searchValue);
    if (!resData) {
      try {
        resData = await fetchData(searchValue);
        if (resData) {
          cacheData(searchValue, resData, 0.1);
        }
      } catch (error) {
        showError("Something went wrong fetching data.");
        console.error(error);
        hideLoading();
        return;
      }
      if (!resData || resData.cod === "404") {
        showError("City not found.");
        hideLoading();
        return;
      }
    }
    const htmlToRender = renderWeather(resData);

    weatherResultEl.innerHTML = htmlToRender;
    weatherResultEl.style.display = "block";
    weatherResultEl.classList.add("show");
    hideLoading();
  }
};
const renderSuggestions = (cities) => {

  suggestionBox.innerHTML = "";
  if (!cities.length) return;
  cities.forEach((city) => {
    const li = document.createElement("li");
    li.textContent = `${city.name}, ${city.country}`;

    li.addEventListener("click", () => {
      inputEl.value = city.name;
      suggestionBox.innerHTML = "";
      searchBtn.disabled = false;
    });
    suggestionBox.appendChild(li);
  });
};
