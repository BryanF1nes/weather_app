import { root } from "../index.js";
import { createForm } from "./form.js";

export const createWebpage = () => {
  root.classList.add("day-time");
  root.appendChild(createForm());
};
