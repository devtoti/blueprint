<script lang="ts">
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import "$lib/fonts/fonts.css";
  import { fade } from "svelte/transition";
  import { onMount, setContext } from "svelte";
  let { children } = $props();
  import { theme } from "$lib/stores";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import HorizontalAxes from "$lib/components/HorizontalAxes.svelte";
  import { page } from "$app/stores";
  let innerWidth = $state(0);
  let innerHeight = $state(0);
  let wnd = $state({ width: 0, height: 0 });
  let pageHasLoaded = $state(false);
  $effect(() => {
    wnd.width = innerWidth;
    wnd.height = innerHeight;
  });
  setContext("WINDOW", wnd);
  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      $theme = "dark";
    } else {
      document.documentElement.removeAttribute("data-theme");
      $theme = "light";
    }
    pageHasLoaded = true;
    injectAnalytics();
    // to be changed later
    const handleAnchorClick = (e: Event) => {
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

    const handleHashOnLoad = () => {
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

    document.addEventListener("click", handleAnchorClick);
    handleHashOnLoad();

    return () => {
      window.removeEventListener("resize", () => {});
      window.removeEventListener("hashchange", handleHashOnLoad);
    };
  });

  function toggleTheme() {
    if ($theme === "dark") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      $theme = "light";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      $theme = "dark";
    }
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />
{#if pageHasLoaded}
  <HorizontalAxes width={innerWidth} height={innerHeight} />
  <Navbar currentPath={$page.url.pathname} {toggleTheme} />
  {@render children()}
  <Footer window={wnd} />
  <HorizontalAxes width={innerWidth} height={innerHeight} />
{:else}
  <div class="page-loading arc-h4" transition:fade>Loading...</div>
{/if}

<style>
  .page-loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25%;
    height: 25%;
    border-radius: 0.25rem;
    background-color: white;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("/src/lib/images/grainy-texture.png"),
      url("/src/lib/images/iso-grid.svg");
    background-size:
      64px 64px,
      fill;
    background-blend-mode: multiply, normal;
    mix-blend-mode: multiply;
    box-shadow: var(--shadow-3);
  }

  /* Add scroll offset for anchor links */
  :global([id]) {
    scroll-margin-top: 64px; /* 52px navbar height + 12px top position */
  }

  /* Ensure smooth scrolling behavior */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
