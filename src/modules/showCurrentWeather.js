import { root } from "../index.js";

export const showCurrentWeather = (data) => {
  const div = document.createElement("div");
  const information = ["name", "region", "country"];
  information.forEach((info) => {
    const h4 = document.createElement("h4");
    h4.textContent = data.location[info];
    div.appendChild(h4);
  });

  div.classList.add("current-weather");
  const temperature = data.current.temp_f + "F";
  const condition = data.current.condition.text;

  const p = document.createElement("p");
  const p1 = document.createElement("p");
  const image = document.createElement("img");
  p.textContent = temperature;
  p1.textContent = condition;
  image.src = data.current.condition.icon;
  div.appendChild(p);
  div.appendChild(p1);
  div.appendChild(image);

  return root.appendChild(div);
};

export const showMultipleDayForecast = (data, days) => {
  const div = document.createElement("div");
};
