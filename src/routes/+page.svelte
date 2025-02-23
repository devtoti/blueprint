<script lang="ts">
  import { onMount, getContext, hasContext } from "svelte";
  import "../styles.css";
  import { GRID } from "$lib/utils/gridData";
  import Navbar from "$lib/components/Navbar.svelte";
  import HorizontalAxes from "$lib/components/HorizontalAxes.svelte";
  // import { windowSize } from "$lib/components/WindowSize.svelte";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  // const getGridDistance = (cols: number) => {
  //   if (!hasContext("GRID")) return;
  //   const grid = getContext("GRID");
  //   const computedStyle = window.getComputedStyle(grid);
  //   const columnGap = parseFloat(computedStyle.columnGap);
  //   const columnWidth = parseFloat(
  //     computedStyle.gridTemplateColumns.split(" ")[1]
  //   );
  //   return +columnWidth.toFixed(2) * cols + columnGap * (cols - 1);
  // };
  let grid = $state<ReturnType<typeof GRID>>(GRID());
  let WINDOW: { width: number; height: number } = getContext("WINDOW");
  // $effect(() => {
  //   console.log(WINDOW.width, WINDOW.height);
  // });
  // console.log(windowSize);
  // getGridDistance(1);

  onMount(() => {
    grid = GRID();
    window.addEventListener("resize", () => {
      grid = GRID();
    });
    console.log($state.snapshot(grid.sidePadding));
    return () => {
      window.removeEventListener("resize", () => {});
    };
  });
  const isMobile = $derived(WINDOW.width < 480);
</script>

<main>
  <section class="hero">
    <article>
      <div>
        <h1>
          <span>{WINDOW.width}</span>
          <span>{WINDOW.height}</span>
        </h1>
      </div>
    </article>
  </section>
  <DividerTrapezoid
    x={WINDOW.width}
    y={isMobile ? 12 : 100}
    w={isMobile ? grid.sidePadding : grid.getColumnsDistance(1) + grid.gap}
    startEnd={1}
  />
  <section class="main-grid projects"></section>
  <DividerTrapezoid
    x={WINDOW.width}
    y={16}
    w={16}
    startEnd={isMobile ? 1 : 2}
  />
  <DividerTrapezoid
    x={WINDOW.width}
    y={16}
    w={16}
    startEnd={isMobile ? 1 : 2}
    invert
  />
  <section class="main-grid work-experience"></section>
  <!-- <section class="main-grid work-experience"></section>
  <DividerTrapezoid x={WINDOW.width} y={16} w={16} />
  <DividerTrapezoid x={WINDOW.width} y={16} w={16} invert />
  <section class="main-grid projects"></section>
  <DividerTrapezoid x={WINDOW.width} y={16} w={16} />
  <article class="cta-banner">
    <h2>
      <span>cta banner</span>
    </h2>
  </article>
  <DividerTrapezoid x={WINDOW.width} y={16} w={16} invert />
  <section class="main-grid new"></section>
  <DividerTrapezoid x={WINDOW.width} y={16} w={16} />
  <DividerTrapezoid x={WINDOW.width} y={16} w={16} invert />
  <section class="main-grid new"></section>
  <DividerTrapezoid x={WINDOW.width} y={16} w={16} />
  <DividerTrapezoid x={WINDOW.width} y={16} w={16} invert />
  <div class="stripped-divider"></div>
  <DividerTrapezoid x={WINDOW.width} y={16} w={16} />
  <article class="cta-banner" style="height: 40svh">
    <h2>
      <span>cta banner</span>
    </h2>
  </article>
  <DividerTrapezoid x={WINDOW.width} y={16} w={16} invert />
  <div class="stripped-divider"></div>
  <DividerTrapezoid x={WINDOW.width} y={16} w={16} />
  <DividerTrapezoid x={WINDOW.width} y={16} w={16} invert /> -->
</main>

<style>
  .main-grid {
    background-color: #e9e8e6;
    width: 100%;
    height: 40svh;
  }
  .hero {
    height: calc(100svh - 1.5rem);
    background-color: #e9e8e6;
    grid-column: 1 / -1;
    width: 100%;
  }
  section {
    border: 1.5px solid blue;
    border-top: 0;
    border-bottom: 0;
  }

  .cta-banner {
    background-color: #d8d3c8;
    grid-column: 1 / -1;
    width: 100%;
    height: 20svh;
  }
  main .cta-banner:last-of-type {
    background-color: royalblue;
  }
  .stripped-divider {
    grid-column: 1 / -1;
    width: 100%;
    background: repeating-linear-gradient(
      to right,
      #dadada,
      #dadada 10px,
      transparent 10px,
      transparent 20px
    );
    height: 100px;
    background-color: #e9e8e6;
  }
</style>
