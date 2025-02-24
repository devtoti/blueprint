<script lang="ts">
  import HorizontalAxes from "./HorizontalAxes.svelte";
  let { window } = $props();
</script>

<HorizontalAxes width={window.width} height={window.height} />
<nav>
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
</nav>

<style>
  nav {
    padding-bottom: 1rem;
    height: 28px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: #e9e8e6;
    padding: 0;
    border-bottom: 1px solid #000;
    border-top: 1px solid #000;
  }
  ul.nav-links {
    grid-column: 2 / -2;
    list-style: none;
    gap: 1rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
</style>
