<script lang="ts">
  import HorizontalAxes from "./HorizontalAxes.svelte";
  let { window } = $props();
  import IconSettings from '~icons/solar/settings-outline'
  import IconSidebar from '~icons/solar/siderbar-outline'
</script>

<nav>
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
        <a href="/tools">Tools</a>
      </li>
      <li>
        <a href="/concept">Concept</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
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
    position: relative;
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
  nav::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("src/lib/images/grainy-texture.png") center center;
    background-size: 64px 64px;
    filter: invert(0.15);
    mix-blend-mode: multiply;
    pointer-events: none;
  }
  /* .mobile-nav {
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    padding: 0 1rem;
  } */
  .nav-container {
    height: 52px;
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    place-items: center;
    justify-content: center;
    background-color: var(--bg-secondary);
    box-shadow: var(--shadow-3);
    width: -webkit-fill-available;
  }
  ul.nav-links {
    list-style: none;
    align-self: center;
    justify-self: center;
    width: 100%;
    gap: 1rem;
    margin: auto;
    display: flex;
    justify-content: center;
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
    height: 52px;
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    justify-content: center;
    background-color: var(--bg-secondary);
    box-shadow: var(--shadow-3);
    width: -webkit-fill-available;
  }
  }
</style>
