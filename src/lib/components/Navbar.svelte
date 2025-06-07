<script lang="ts">
  import "../../styles.css";
  import "../../tokens.css";
  import "../../styles/text-styles.css";
  import { page } from "$app/state";
  import IconHamburger from "$lib/icons/hamburger.svg";
  import IconBlueprint from "$lib/icons/blueprint.svg";
  import IconCloseNav from "$lib/icons/close-nav.svg";
  import Button from "$lib/components/Button.svelte";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import { getContext, onMount } from "svelte";
  import { GRID } from "$lib/utils/gridData";
  let WINDOW: { width: number; height: number } = getContext("WINDOW");
  let isMobile = $derived(WINDOW.width <= 464);
  let grid = $state(GRID());
  let isNavOpen = $state(false);
  onMount(() => {
    grid = GRID();
    window.addEventListener("resize", () => {
      grid = GRID();
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  });
  let showNav = $state(true);
  let currScrollPos = $state(0);
  function handleScroll() {
    const newPosition = window.pageYOffset;
    if (newPosition > currScrollPos) {
      showNav = false;
      currScrollPos = newPosition;
    } else if (currScrollPos - newPosition >= 120) {
      showNav = true;
      currScrollPos = newPosition;
    }
  }
  let bodyHeight = $state(0);
  const getBodyHeight = (body: HTMLElement) => {
    bodyHeight = body.clientHeight;
  };
  function disableScroll() {
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  }
  function enableScroll() {
    window.onscroll = null;
  }
  $effect(() => {
    if (isNavOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  });
</script>

<svelte:body use:getBodyHeight />
<svelte:window onscroll={handleScroll} />
<nav class="grainy" class:active={showNav}>
  <article class="nav-container">
    <ul class="nav-links desktop-only">
      <li>
        <a href="/" class:active={page.url.pathname === "/"}>Blueprint</a>
      </li>
      <li>
        <a href="/dev" class:active={page.url.pathname === "/dev"}>Dev</a>
      </li>
      <li>
        <a href="/design" class:active={page.url.pathname === "/design"}
          >Design</a
        >
      </li>
      <li>
        <a href="/concept" class:active={page.url.pathname === "/concept"}
          >Concept</a
        >
      </li>
      <li>
        <a href="/contact" class:active={page.url.pathname === "/contact"}
          >Contact</a
        >
      </li>
      <li>
        <a href="/about" class:active={page.url.pathname === "/about"}>About</a>
      </li>
    </ul>
    <section class="mobile-only mobile-nav">
      <a href="/" class="blueprint-logo">
        <img src={IconBlueprint} alt="Blueprint Logo" />
      </a>
      <button>
        <Button href="/contact" text="Contáctame" primary />
      </button>
      <div class="mobile-nav-icons">
        {#if isNavOpen}
          <button onclick={() => (isNavOpen = false)}>
            <img src={IconCloseNav} alt="Close Menu" />
          </button>
        {:else}
          <button onclick={() => (isNavOpen = true)}>
            <img src={IconHamburger} alt="Hamburger Menu" />
          </button>
        {/if}
      </div>
    </section>
  </article>
  <article class="active-nav-container" class:isNavOpen>
    <article class="main-content stripped-divider"></article>
    <DividerTrapezoid
      width={WINDOW.width}
      y={isMobile ? 16 : 100}
      w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
      startEnd={1}
      children={() => null}
    />
    <DividerTrapezoid
      width={WINDOW.width}
      y={isMobile ? 16 : 100}
      w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
      startEnd={1}
      children={() => null}
      invert
    />
    <ul class="active-nav-links links-container">
      <li>
        <a href="/" class="arc-h4" onclick={() => (isNavOpen = false)}>Home</a>
      </li>
      <li>
        <a href="/dev" class="arc-h4" onclick={() => (isNavOpen = false)}>Dev</a
        >
      </li>
      <li>
        <a href="/design" class="arc-h4" onclick={() => (isNavOpen = false)}
          >Design</a
        >
      </li>
      <li>
        <a href="/concept" class="arc-h4" onclick={() => (isNavOpen = false)}
          >Concept</a
        >
      </li>
      <li>
        <a href="/contact" class="arc-h4" onclick={() => (isNavOpen = false)}
          >Contact</a
        >
      </li>
      <li>
        <a href="/about" class="arc-h4" onclick={() => (isNavOpen = false)}
          >About</a
        >
      </li>
    </ul>
    <DividerTrapezoid
      width={WINDOW.width}
      y={isMobile ? 16 : 100}
      w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
      startEnd={1}
      children={() => null}
    />
    <DividerTrapezoid
      width={WINDOW.width}
      y={isMobile ? 16 : 100}
      w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
      startEnd={1}
      invert
      children={() => null}
    />
    <article class="main-content stripped-divider"></article>
  </article>
</nav>
<div class="black-overlay" class:isNavOpen style="height: {bodyHeight}px"></div>

<style>
  .desktop-only {
    display: none !important;
  }
  .mobile-only {
    display: grid !important;
    grid-column: 1 / -1;
    grid-template-columns: 64px 1fr 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    padding: 0 1rem;
    position: relative;
  }
  .nav-links a {
    font-size: 0.75rem;
    font-weight: 400;
  }
  .blueprint-logo {
    all: unset;
    grid-column: 1 / 2;
    align-self: center;
    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
  .mobile-nav-icons {
    display: flex;
    gap: 0.5rem;
    button {
      all: unset;
    }
  }
  nav {
    position: sticky;
    padding-bottom: 1rem;
    height: 52px;
    justify-content: space-between;
    flex-direction: column;
    background-color: #c2c2c2;
    padding: 0;
    top: 12px;
    z-index: 80;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--text-secondary);
    transition: top 0.5s ease-in-out;
  }
  nav.active {
    top: 12px;
  }
  nav:not(.active) {
    top: -28px;
  }
  .nav-container {
    display: relative;
    grid-column: 1 / -1;
    box-shadow: var(--shadow-3);
    background-color: var(--bg-secondary);
    width: 100%;
  }
  .black-overlay:not(.isNavOpen) {
    opacity: 0;
  }
  .active-nav-container:not(.isNavOpen) {
    display: none;
  }
  .active-nav-container {
    position: absolute;
    height: calc(100svh - 48px);
    left: 50%;
    top: 52px;
    transform: translateX(-50%);
    width: calc(100% - 2rem);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .black-overlay {
    pointer-events: none;
    width: 100svw;
    min-height: 100svh;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    transition: opacity 0.5s ease-in-out;
  }
  .links-container {
    height: 100%;
    background-color: var(--bg-secondary);
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 1rem;
    z-index: 200;
  }
  .active-nav-links {
    border: 1.5px solid var(--text-secondary);
    border-top: none;
    border-bottom: none;
  }
  a {
    font-weight: 500;
    transition: color 0.5s ease-in-out;
    &.active {
      color: var(--text-primary);
      font-weight: 700;
    }
  }
  @media (min-width: 480px) {
    .mobile-nav {
      display: none !important;
    }
    .desktop-only {
      display: flex !important;
    }
    .nav-container {
      width: -webkit-fill-available;
    }
    ul.nav-links {
      grid-column: 3 / -3;
      display: contents !important;
      list-style: none;
      align-self: center;
      justify-self: center;
      width: 100%;
      gap: 1rem;
      margin: auto;
      display: flex;
      justify-content: center;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      li:first-of-type {
        grid-column: 3 / span 1;
      }
    }
    @media (min-width: 1029px) {
      ul.nav-links {
        grid-column: 3 / -3;
        li:first-of-type {
          grid-column: 5 / span 1;
        }
      }
    }
  }
</style>
