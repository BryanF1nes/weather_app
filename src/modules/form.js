import { fetchCurrentData } from "../utils/fetch.js";

export const createForm = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");

  input.setAttribute("placeholder", "Enter a location");
  button.textContent = "Submit";

  form.appendChild(input);
  form.appendChild(button);

  return form;
};

export const formEventHandler = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = e.target.firstChild.value;
    fetchCurrentData(search);
  });
};
