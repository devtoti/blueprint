<script lang="ts">
  import { onMount } from "svelte";
  import "../styles.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import HorizontalAxes from "$lib/components/HorizontalAxes.svelte";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  // let width = $state(0);
  // let height = $state(0);
  // let grid = $state<HTMLElement | null>(null);
  const getGridDistance = (cols: number) => {
    if (!grid) return;
    const computedStyle = window.getComputedStyle(grid);
    const columnGap = parseFloat(computedStyle.columnGap);
    const columnWidth = parseFloat(
      computedStyle.gridTemplateColumns.split(" ")[1]
    );
    return +columnWidth.toFixed(2) * cols + columnGap * (cols - 1);
  };
  let { width, height } = $props();

  // onMount(() => {
  //   grid = document.querySelector("main");
  //   function onResize() {
  //     width = document.documentElement.clientWidth;
  //     height = document.documentElement.clientHeight;
  //   }
  //   window.addEventListener("resize", onResize);
  //   onResize();
  //   return () => {
  //     window.removeEventListener("resize", onResize);
  //   };
  // });
</script>

<main>
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
  <DividerTrapezoid x={width} y={16} w={16} />
  <DividerTrapezoid x={width} y={16} w={16} invert />
  <section class="main-grid work-experience"></section>
  <DividerTrapezoid x={width} y={16} w={16} />
  <DividerTrapezoid x={width} y={16} w={16} invert />
  <section class="main-grid projects"></section>
  <DividerTrapezoid x={width} y={16} w={16} />
  <article class="cta-banner">
    <h2>
      <span>cta banner</span>
    </h2>
  </article>
  <DividerTrapezoid x={width} y={16} w={16} invert />
  <section class="main-grid new"></section>
  <DividerTrapezoid x={width} y={16} w={16} />
  <DividerTrapezoid x={width} y={16} w={16} invert />
  <section class="main-grid new"></section>
  <DividerTrapezoid x={width} y={16} w={16} />
  <DividerTrapezoid x={width} y={16} w={16} invert />
  <div class="stripped-divider"></div>
  <DividerTrapezoid x={width} y={16} w={16} />
  <article class="cta-banner" style="height: 40svh">
    <h2>
      <span>cta banner</span>
    </h2>
  </article>
  <DividerTrapezoid x={width} y={16} w={16} invert />
  <div class="stripped-divider"></div>
  <DividerTrapezoid x={width} y={16} w={16} />
  <DividerTrapezoid x={width} y={16} w={16} invert />
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
