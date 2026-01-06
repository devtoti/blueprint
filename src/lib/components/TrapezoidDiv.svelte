<script>
  import { GRID } from "$lib/utils/gridData";
  import { onMount } from "svelte";
  import { setupGridResize } from "$lib/utils";
  let grid = $state(GRID());
  let { width = 100, height = 100, color = "var(--bg-primary)" } = $props();
  onMount(() => {
    return setupGridResize(() => {
      grid = GRID();
    });
  });
  let triangleWidth = $derived(grid.columnWidth + grid.gap * 2.5);
</script>

<section class="triangle-wrapper">
  <div
    class="triangle-left"
    style="border-bottom: {triangleWidth}px solid transparent; border-right: {triangleWidth}px solid var(--bg-primary);"
  >
    <div
      class="texture"
      style="width: {triangleWidth}px; height: {triangleWidth}px; clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0%);"
    ></div>
  </div>
  <div class="mid-square">
    {triangleWidth} / {grid.gap}
  </div>
  <div
    class="triangle-right"
    style="border-bottom: {triangleWidth}px solid transparent; border-left: {triangleWidth}px solid var(--bg-primary);"
  ></div>
</section>

<style>
  .triangle-wrapper {
    /* display: contents; */
    grid-column: 1 / -1;
    width: 100%;
    /* outline: 1px solid blue; */
    > * {
      background: url("/src/lib/images/grainy-texture.png");
      background-size: 64px 64px;
      background-position: center center;
      background-repeat: repeat;
      /* mix-blend-mode: multiply; */
      /* filter: invert(0.15); */
    }
  }
  .triangle-left {
    width: 0;
    height: 0;
    grid-column: 1 / 3;
    /* outline: 1px solid red; */
    position: relative;
    & .texture {
      background-image: url("/src/lib/images/grainy-texture.png");
      background-size: 64px 64px;
      background-position: center;
      background-repeat: repeat;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* filter: invert(0.15); */
      mix-blend-mode: multiply;
      background-color: var(--bg-primary);
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid transparent;
        border-bottom: 1px solid var(--border-primary);
        border-right: 1px solid var(--border-primary);
      }
    }
  }
  .mid-square {
    width: 100%;
    height: 100%;
    background-color: var(--bg-primary);
    grid-column: 3 / -3;
  }
  .triangle-right {
    width: 0;
    height: 0;
    grid-column: span 2 / -1;
    outline: 1px solid red;
  }
</style>
