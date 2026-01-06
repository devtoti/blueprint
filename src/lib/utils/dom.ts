import type { Writable } from "svelte/store";
import { browser } from "$app/environment";
import { tick } from "svelte";

export const injectCalendly = () => {
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.head.appendChild(script);
};

export const establishTheme = (ref: Writable<string>) => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    ref.set("dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
    ref.set("light");
  }
};

export const handleAnchorClick = (e: Event) => {
  const target = e.target as HTMLElement;
  const link = target.closest(
    'a[href^="#"], a[href^="/#"]'
  ) as HTMLAnchorElement;

  if (link) {
    e.preventDefault();
    const href = link.getAttribute("href");
    const targetId = href?.startsWith("/#")
      ? href.substring(2)
      : href?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = 64;
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  }
};

export const handleHashOnLoad = () => {
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => {
        const offset = 64; // 52px navbar height + 12px top position
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  }
};
export const toggleTheme = (ref: Writable<string>, currentValue: string) => {
  if (currentValue === "dark") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    ref.set("light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    ref.set("dark");
  }
};
export const disableScroll = () => {
  if (browser) {
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  }
};
export const enableScroll = () => {
  if (browser) {
    window.onscroll = null;
  }
};
export const showHideNavOnScroll = (
  showNav: boolean,
  currScrollPos: number
) => {
};

export const showHideAxesOnClick = () => {
  const axes = document.querySelectorAll<HTMLElement>(".axes");
  const nav = document.querySelector<HTMLElement>("nav");
  const hasActiveAxes =
    document.querySelectorAll<HTMLElement>(
      ".axes:not(.disabled)"
    ).length > 0;
  if (hasActiveAxes) {
    axes.forEach((axis) => {
      axis.classList.add("disabled");
    });
    nav?.classList.add("no-axes");
  } else {
    axes.forEach((axis) => {
      axis.classList.remove("disabled");
    });
    nav?.classList.remove("no-axes");
  }
};

export const setupGridResize = (updateGrid: () => void) => {
  if (!browser) return () => {};
  
  const initialize = async () => {
    const main = document.querySelector("main");
    if (!main) {
      await tick();
    }
    updateGrid();
  };

  initialize();
  
  window.addEventListener("resize", updateGrid);
  return () => {
    window.removeEventListener("resize", updateGrid);
  };
};