<script lang="ts">
  import HorizontalAxes from "./HorizontalAxes.svelte";
  let { width, height } = $props();
</script>

<footer class="footer">
  <p>Footer</p>
  <HorizontalAxes {width} {height} />
</footer>

<style>
  .footer {
    background-color: #e9e8e6;
    grid-column: 1 / -1;
    width: 100%;
  }
</style>
