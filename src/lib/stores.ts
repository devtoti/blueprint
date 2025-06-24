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
  fromLocalStorage("lang", "en")
);

toLocalStorage(lang, "lang");

function fromLocalStorage(storageKey: string, fallbackValue: any) {
	if (browser) {
		const storedValue = window.localStorage.getItem(storageKey)

    if (storedValue !== "undefined" && storedValue !== null) {
      return typeof fallbackValue === "object"
        ? JSON.parse(storedValue)
        : storedValue;
    }
	}
	
	return fallbackValue
}
function toLocalStorage(store: Writable<any>, storageKey: string) {
  if (browser) {
    store.subscribe((value) => {
      let storageValue =
        typeof value === "object" ? JSON.stringify(value) : value;

      window.localStorage.setItem(storageKey, storageValue);
		})
	}
}