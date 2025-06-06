<script lang="ts">
  import { page } from "$app/state";
  import IconSettings from "~icons/solar/settings-outline";
  import IconSidebar from "~icons/solar/siderbar-outline";
  import IconHamburger from "$lib/icons/hamburger.svg";
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
</script>

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
      <img src={IconHamburger} alt="Hamburger Menu" />
      <button>
        <a href="/">Get In Touch</a>
      </button>
      <div class="mobile-nav-icons">
        <IconSettings />
        <IconSidebar />
      </div>
    </section>
  </article>
</nav>

<style>
  .desktop-only {
    display: none !important;
  }
  .mobile-only {
    display: flex !important;
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    padding: 0 1rem;
  }
  .mobile-nav-icons {
    display: flex;
    gap: 0.5rem;
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

  a {
    text-decoration: none;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 400;
    color: var(--text-secondary);
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
