<script lang="ts">
  import "../../styles.css";
  import "../../tokens.css";
  import "../../styles/text-styles.css";
  import IconHamburger from "$lib/icons/hamburger.svg";
  import IconCloseNav from "$lib/icons/close-nav.svg";
  import Button from "$lib/components/Button.svelte";
  import Text from "$lib/components/Text.svelte";
  import { dictionary as navigation } from "$lib/dictionary";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import { getContext, onMount, setContext } from "svelte";
  import { GRID } from "$lib/utils/gridData";
  import { theme, lang } from "$lib/stores";
  let { currentPath = "/", toggleTheme } = $props();
  let WINDOW: { width: number; height: number } = getContext("WINDOW");
  let isMobile = $derived(WINDOW.width <= 464);
  let grid = $state(GRID());
  let isNavOpen = $state(false);
  let isDarkMode = $derived($theme === "dark");
  onMount(() => {
    grid = GRID();
    window.addEventListener("resize", () => {
      grid = GRID();
    });
  });

  let showNav = $state(true);
  let currScrollPos = $state(0);
  function handleScroll() {
    const newPosition = window.pageYOffset;
    if (newPosition > currScrollPos + 200) {
      showNav = true;
      currScrollPos = newPosition;
    } else if (currScrollPos - newPosition >= 200) {
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
        <a href="/" class:active={currentPath === "/"}>Blueprint</a>
      </li>
      <li>
        <a href="/dev" class:active={currentPath === "/dev"}>Dev</a>
      </li>
      <li>
        <a href="/design" class:active={currentPath === "/design"}>Design</a>
      </li>
      <li>
        <a href="/concept" class:active={currentPath === "/concept"}>Concept</a>
      </li>
      <li>
        <a href="/contact" class:active={currentPath === "/contact"}>Contact</a>
      </li>
      <li>
        <a href="/about" class:active={currentPath === "/about"}>About</a>
      </li>
      <li>
        <select id="lang" name="lang" bind:value={$lang} class="lang-select">
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
        <button
          class="theme-toggle"
          type="button"
          onclick={toggleTheme}
          aria-label="Toggle theme"
        >
          {#if isDarkMode}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          {/if}
        </button>
      </li>
    </ul>
    <section class="mobile-only mobile-nav">
      <button class:isHidden={!showNav} style:opacity={showNav ? "1" : "0"}>
        <Button href="/contact" text="contact" primary />
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
      <div class="mobile-nav-settings">
        <select id="lang" name="lang" bind:value={$lang} class="lang-select">
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
        <button
          type="button"
          class="theme-toggle"
          onclick={toggleTheme}
          aria-label="Toggle theme"
        >
          {#if isDarkMode}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          {/if}
        </button>
      </div>
      <li>
        <a href="/" class="arc-h4" onclick={() => (isNavOpen = false)}>
          <Text section="navigation" text="home" />
        </a>
      </li>
      <li>
        <a href="/dev" class="arc-h4" onclick={() => (isNavOpen = false)}>
          <Text section="navigation" text="development" />
        </a>
      </li>
      <li>
        <a href="/design" class="arc-h4" onclick={() => (isNavOpen = false)}>
          <Text section="navigation" text="design" />
        </a>
      </li>
      <li>
        <a href="/concept" class="arc-h4" onclick={() => (isNavOpen = false)}>
          <Text section="navigation" text="concept" />
        </a>
      </li>
      <li>
        <a href="/contact" class="arc-h4" onclick={() => (isNavOpen = false)}>
          <Text section="navigation" text="contact" />
        </a>
      </li>
      <li>
        <a href="/about" class="arc-h4" onclick={() => (isNavOpen = false)}>
          <Text section="navigation" text="about" />
        </a>
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
    width: 100% !important;
    padding: 0 1rem;
    position: relative;
    & :first-child {
      grid-column: 2 / 3;
    }
  }
  .mobile-nav-settings {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 0 2rem;
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
    grid-column: 3 / 4;
    display: flex;
    gap: 0.5rem;
    button {
      all: unset;
    }
    button.isHidden {
      display: none;
    }
  }
  nav {
    position: sticky;
    padding-bottom: 1rem;
    height: 52px;
    justify-content: space-between;
    flex-direction: column;
    background-color: var(--bg-secondary);
    padding: 0;
    top: 12px;
    z-index: 80;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--text-secondary);
    transition: top 0.5s ease-in-out;
    overflow: visible;
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
    overflow: visible;
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
    border: 1.5px solid var(--border-tertiary);
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
  .lang-select {
    background-color: transparent;
    border: none;
    color: inherit;
    font-family: inherit;
    font-size: 0.875rem;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    transition: background-color 0.2s;
    position: relative;
    z-index: 100;
  }

  .lang-select:hover {
    background-color: rgba(128, 128, 128, 0.1);
  }

  .lang-select:focus {
    outline: none;
    background-color: rgba(128, 128, 128, 0.15);
  }
  @media (min-width: 480px) {
    .nav-container {
      width: -webkit-fill-available;
    }
    @media (min-width: 1029px) {
      .mobile-nav {
        display: none !important;
      }
      .desktop-only {
        display: flex !important;
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
      ul.nav-links {
        grid-column: 3 / -3;
        li:first-of-type {
          grid-column: 5 / span 1;
        }
        li:last-of-type {
          grid-column: span 1 / -2;
        }
      }
    }
  }
  .theme-toggle {
    all: unset;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    transition: color 0.3s ease;
    grid-column: span 1 / -1;
  }

  .theme-toggle:hover {
    color: var(--icon-secondary);
  }

  .theme-toggle svg {
    width: 20px;
    height: 20px;
  }
  :global([data-theme="dark"]) nav {
    background-color: var(--bg-primary);
    color: var(--bleu-100);
    box-shadow: var(--shadow-3);
  }

  :global([data-theme="dark"]) .nav-container {
    background-color: var(--bg-primary);
    border-bottom: 1px solid var(--border-tertiary);
  }

  :global([data-theme="dark"]) .active-nav-container {
    background-color: var(--bg-primary);
  }
  :global([data-theme="dark"]) .mobile-nav-settings {
    color: var(--text-secondary);
  }

  :global([data-theme="dark"]) .active-nav-links {
    background-color: var(--bg-primary);
    border-color: var(--border-tertiary);
    
  }

  :global([data-theme="dark"]) a {
    color: var(--text-secondary);
  }

  :global([data-theme="dark"]) a.active {
    color: var(--text-light);
  }
</style>
