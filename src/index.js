import "./style.css";
import { formEventHandler } from "./modules/form.js";
import { createWebpage } from "./modules/createWebpage.js";

export const root = document.querySelector("#root");

createWebpage();

(function init() {
  formEventHandler();
})();
