<script lang="ts">
  import HorizontalAxes from "./HorizontalAxes.svelte";

  let { window } = $props();
</script>

<footer class="footer grainy">
  <article class="footer-container">
    <p>Footer</p>
  </article>
  <HorizontalAxes width={window.width} height={window.height} />
</footer>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .footer {
    position: relative;
    padding-bottom: 1rem;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #c2c2c2;
    padding: 0;
    outline: 1px solid #000;
    height: 40svh;
    grid-column: 2 / -2;
  }
  .footer-container {
    height: 100%;
    width: 100%;
    background-color: #e9e8e6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
