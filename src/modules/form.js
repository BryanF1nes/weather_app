import { root } from "../index.js";
import { fetchCurrentData, fetchForecastData } from "../utils/fetch.js";
import { showCurrentWeather } from "./showCurrentWeather.js";

export const createForm = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const select = document.createElement("select");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  const dayOptions = [3, 5, 7];

  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", "forecast");
  checkbox.id = "forecast";
  label.textContent = "Forecast";
  label.setAttribute("for", "forecast");

  dayOptions.forEach((day) => {
    const option = document.createElement("option");
    option.textContent = day;
    option.value = day;
    select.appendChild(option);
  });

  select.classList.add("hidden");
  input.setAttribute("placeholder", "Enter a location");
  input.setAttribute("required", "");

  button.textContent = "Send";

  form.appendChild(input);
  form.appendChild(label);
  form.appendChild(checkbox);
  form.appendChild(select);
  form.appendChild(button);

  return form;
};

export const formEventHandler = () => {
  const form = document.querySelector("form");
  const checkbox = document.querySelector("#forecast");

  checkbox.addEventListener("click", () => {
    const select = document.querySelector("select");
    if (checkbox.checked) {
      return select.classList.remove("hidden");
    }
    select.classList.add("hidden");
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const div = document.querySelector(".current-weather");
    const search = e.target.firstChild.value;
    const dayValue = document.querySelector("select").value;

    if (!checkbox.checked) {
      const data = await fetchCurrentData(search);
      if (div) {
        div.remove();
      }
      return await showCurrentWeather(data);
    }

    if (checkbox.checked) {
      return await fetchForecastData(search, dayValue);
    }
  });
};
