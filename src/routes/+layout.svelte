<script lang="ts">
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import LogRocket from "logrocket";
  import "$lib/fonts/fonts.css";
  import { fade } from "svelte/transition";
  import { onMount, setContext } from "svelte";
  let { children } = $props();
  import { theme } from "$lib/stores";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { page } from "$app/stores";
  import { GRID } from "$lib/utils/gridData";
  import {
    injectCalendly,
    establishTheme,
    handleAnchorClick,
    handleHashOnLoad,
    toggleTheme,
  } from "$lib/utils";
  let pageHasLoaded = $state(false);
  let innerWidth = $state(0);
  let innerHeight = $state(0);
  let wnd = $state({ width: 0, height: 0 });
  let bodyHeight = $state(0);
  let grid = $state(GRID());

  $effect(() => {
    wnd.width = innerWidth;
    wnd.height = innerHeight;
    setContext("WINDOW", wnd);
    setContext("GRID", grid);
    // $inspect(wnd, grid);
  });

  onMount(() => {
    pageHasLoaded = true;
    // injectAnalytics();
    // LogRocket.init('devtoti/blueprintdev');
    injectCalendly();
    establishTheme(theme);
    document.addEventListener("click", handleAnchorClick);
    handleHashOnLoad();

    return () => {
      window.removeEventListener("resize", () => {});
      window.removeEventListener("hashchange", handleHashOnLoad);
    };
  });

  const getBodyHeight = (body: HTMLElement) => {
    bodyHeight = body.clientHeight;
  };

  function handleToggleTheme() {
    toggleTheme(theme, $theme);
  }
</script>

<svelte:body use:getBodyHeight />
<svelte:window bind:innerWidth bind:innerHeight />
{#if pageHasLoaded}
  <Navbar currentPath={$page.url.pathname} toggleTheme={handleToggleTheme} />
  {@render children()}
  <Footer window={wnd} />
  <!-- <HorizontalAxes width={innerWidth} /> -->
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
