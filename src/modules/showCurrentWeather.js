export const showCurrentWeather = (data) => {
  const div = document.createElement("div");
  const information = ["name", "region", "country"];
  information.forEach((info) => {
    const h3 = document.createElement("h3");
    h3.textContent = data.location[info];
    div.appendChild(h3);
  });

  div.classList.add("current-weather");
  const temperature = Math.round(data.current.temp_f) + "°F";
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

  return div;
};

export const showMultipleDayForecast = (data) => {
  const div = document.createElement("div");
  div.classList.add("forecast-weather");
  data.forEach((day) => {
    const container = document.createElement("div");
    const h5 = document.createElement("h5");
    const highTemp = document.createElement("p");
    const lowTemp = document.createElement("p");
    const highLow = document.createElement("div");
    const condition = document.createElement("p");
    const image = document.createElement("img");

    const convertedDate = new Date(day.date);

    h5.textContent = convertedDate.toString().slice(0, 15);
    highTemp.textContent = `${Math.round(day.day.maxtemp_f)}°F`;
    lowTemp.textContent = `${Math.round(day.day.mintemp_f)}°F`;
    condition.textContent = day.day.condition.text;
    image.src = day.day.condition.icon;

    highLow.classList.add("high-low");
    highLow.appendChild(highTemp);
    highLow.appendChild(lowTemp);

    container.appendChild(h5);
    container.appendChild(highLow);
    container.appendChild(condition);
    container.appendChild(image);

    div.appendChild(container);
  });

  return div;
};
