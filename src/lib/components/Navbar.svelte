<script lang="ts">
  import HorizontalAxes from "./HorizontalAxes.svelte";
  let { window } = $props();
</script>

<nav>
  <HorizontalAxes width={window.width} height={window.height} />
  <article class="nav-container">
    <ul class="nav-links">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </article>
</nav>

<style>
  nav {
    padding-bottom: 1rem;
    height: 64px;
    justify-content: space-between;
    flex-direction: column;
    background-color: #c2c2c2;
    padding: 0;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .nav-container {
    height: 52px;
    grid-column: 1 / -1;
    width: 100%;
    display: grid;
    place-items: center;
    justify-content: center;
    background-color: var(--bg-secondary);
    box-shadow: var(--shadow-3);
  }
  ul.nav-links {
    list-style: none;
    align-self: center;
    justify-self: center;
    width: 100%;
    gap: 1rem;
    margin: auto;
    display: flex;
  }
</style>
