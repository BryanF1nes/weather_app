import { fetchCurrentData } from "../utils/fetch.js";
import { showData } from "./showData.js";

export const createForm = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");

  input.setAttribute("placeholder", "Enter a location");
  input.setAttribute("required", "");
  button.textContent = "Send";

  form.appendChild(input);
  form.appendChild(button);

  return form;
};

export const formEventHandler = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const search = e.target.firstChild.value;
    if (!search) {
      return fetchCurrentData();
    }
    const data = await fetchCurrentData(search);
    return await showData(data);
  });
};
