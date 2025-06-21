import { writable } from "svelte/store";
import { browser } from "$app/environment";
import type { Writable } from "svelte/store";

export const theme: Writable<string> = writable(
  browser ? (localStorage.getItem("theme") || "light") : "light"
);

theme.subscribe((value) => {
  if (browser) {
    localStorage.setItem("theme", value);
  }
});

export const lang: Writable<string> = writable(
  browser ? (localStorage.getItem("lang") || "en") : "en"
);

lang.subscribe((value) => {
  if (browser) {
    localStorage.setItem("lang", value);
  }
});
