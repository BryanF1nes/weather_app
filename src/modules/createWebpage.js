import { root } from "../index.js";
import { createForm } from "./form.js";
import { showData } from "./showData.js";

export const createWebpage = () => {
  root.appendChild(createForm());
  //   root.appendChild(showData());
};
