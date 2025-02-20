<script lang="ts">
  import HorizontalAxes from "./HorizontalAxes.svelte";
  let { width, height } = $props();
</script>

<nav>
  <HorizontalAxes {width} {height} />
  <ul>
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
  }
  ul {
    display: contents;
    list-style: none;
  }
</style>
