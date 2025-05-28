<script lang="ts">
  import HorizontalAxes from "./HorizontalAxes.svelte";
  let { window } = $props();
  import IconSettings from "~icons/solar/settings-outline";
  import IconSidebar from "~icons/solar/siderbar-outline";
</script>

<nav class="grainy">
  <HorizontalAxes width={window.width} height={window.height} />
  <article class="nav-container">
    <ul class="nav-links desktop-only">
      <li>
        <a href="/">Blueprint</a>
      </li>
      <li>
        <a href="/dev">Dev</a>
      </li>
      <li>
        <a href="/design">Design</a>
      </li>
      <li>
        <a href="/concept">Concept</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
    <section class="mobile-only mobile-nav">
      <img src="src/lib/icons/hamburger.svg" alt="Hamburger Menu" />
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
    height: 64px;
    justify-content: space-between;
    flex-direction: column;
    background-color: #c2c2c2;
    padding: 0;
    position: sticky;
    top: 0;
    z-index: 100;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--text-secondary);
  }
  .nav-container {
    display: sticky;
    height: 52px;
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
