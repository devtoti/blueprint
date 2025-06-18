import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const theme = writable(
  browser && (localStorage.getItem("theme") || "light")
);
theme.subscribe((value) => {
  if (browser) {
    localStorage.setItem("theme", value.toString());
  }
});