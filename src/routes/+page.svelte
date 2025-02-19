<script lang="ts">
  import { onMount } from "svelte";
  import "../styles.css";
  import HorizontalAxes from "$lib/components/HorizontalAxes.svelte";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  let width = $state(0);
  let height = $state(0);
  let grid = $state<HTMLElement | null>(null);
  const getGridDistance = (cols: number) => {
    if (!grid) return;
    const computedStyle = window.getComputedStyle(grid);
    const columnGap = parseFloat(computedStyle.columnGap);
    const columnWidth = parseFloat(
      computedStyle.gridTemplateColumns.split(" ")[1]
    );
    return +columnWidth.toFixed(2) * cols + columnGap * (cols - 1);
  };

  onMount(() => {
    grid = document.querySelector("main");
    function onResize() {
      width = document.documentElement.clientWidth;
      height = document.documentElement.clientHeight;
    }
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });
</script>

<main>
  <HorizontalAxes {width} {height} />
  <section class="hero">
    <article>
      <div>
        <h1>
          <span>{width}</span>
          <span>{height}</span>
        </h1>
      </div>
    </article>
  </section>
  <DividerTrapezoid x={width} y={100} w={100} />
  <div
    style="grid-column: 2 / 3; height: 100px; width: 100%; background-color: red"
  ></div>
  <DividerTrapezoid x={getGridDistance(8)} y={100} w={100} startEnd={3} />
  <DividerTrapezoid x={width} y={40} w={24} invert />
  <DividerTrapezoid x={width} y={100} w={100} invert />
  <HorizontalAxes {width} {height} />
</main>

<style>
  .hero {
    height: calc(100svh - 1.5rem);
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    background-color: rgba(0, 0, 0, 0.1);
  }
  div {
    background-color: lightgray;
  }
</style>
