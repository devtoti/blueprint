<script lang="ts">
  import HorizontalAxes from "./HorizontalAxes.svelte";
  import DividerTrapezoid from "./DividerTrapezoid.svelte";
  import { GRID } from "$lib/utils/gridData";
  let { window } = $props();
  let isMobile = $derived(window.width <= 464);
  let grid = $derived(GRID());
</script>

<DividerTrapezoid
  width={window.width}
  y={isMobile ? 16 : 100}
  w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
  startEnd={1}
  invert
/>
<footer class="footer">
  <p>Footer</p>
</footer>
<HorizontalAxes width={window.width} height={window.height} />

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .footer {
    padding-bottom: 1rem;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #e9e8e6;
    padding: 0;
    outline: 1px solid #000;
    height: 40svh;
    grid-column: 2 / -2;
  }
</style>
