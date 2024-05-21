import "./style.css";
import { createForm, formEventHandler } from "./modules/form.js";

export const root = document.querySelector("#root");

root.appendChild(createForm());

(function init() {
  formEventHandler();
})();
