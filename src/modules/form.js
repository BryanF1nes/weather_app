import { root } from "../index.js";
import { fetchCurrentData, fetchForecastData } from "../utils/fetch.js";
import {
  showCurrentWeather,
  showMultipleDayForecast,
} from "./showCurrentWeather.js";

export const createForm = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");

  input.setAttribute("placeholder", "Enter a location");
  input.setAttribute("type", "text");
  input.setAttribute("required", "");

  button.textContent = "Send";

  form.appendChild(input);
  form.appendChild(button);

  return form;
};

export const formEventHandler = () => {
  const form = document.querySelector("form");
  const container = document.createElement("div");
  container.classList.add("container");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const currentWeather = document.querySelector(".current-weather");
    const forecastWeather = document.querySelector(".forecast-weather");
    const search = e.target.firstChild.value;

    const currentWeatherData = await fetchCurrentData(search);
    const forecastData = await fetchForecastData(search);
    if (currentWeather && forecastWeather) {
      currentWeather.remove();
      forecastWeather.remove();
    }

    console.log(await currentWeatherData);
    if (currentWeatherData.current.is_day === 0) {
      root.classList.remove("day-time");
      root.classList.add("night-time");
    } else {
      root.classList.remove("night-time");
      root.classList.add("day-time");
    }

    container.appendChild(await showCurrentWeather(currentWeatherData));
    container.appendChild(await showMultipleDayForecast(forecastData));

    root.appendChild(container);
    form.reset();
  });
};
