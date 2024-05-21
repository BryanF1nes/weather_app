import { root } from "../index.js";

export const showData = (data) => {
  const information = ["name", "region", "country"];
  information.forEach((info) => {
    const p = document.createElement("p");
    p.textContent = data.location[info];
    root.appendChild(p);
  });

  const temperature = data.current.temp_f + "F";
  const condition = data.current.condition.text;

  const p = document.createElement("p");
  const p1 = document.createElement("p");
  const image = document.createElement("img");
  p.textContent = temperature;
  p1.textContent = condition;
  image.src = data.current.condition.icon;

  p1.appendChild(image);
  root.appendChild(p);
  root.appendChild(p1);
};
