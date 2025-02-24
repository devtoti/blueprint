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
    console.log(window.innerWidth, grid.widthNoPadding);
    return () => {
      window.removeEventListener("resize", () => {});
    };
  });
  const isMobile = $derived(WINDOW.width <= 480);
  const setDividerWidth = (width: number) => {
    // 464px value because it takes away 2 times the column gap (2*8px)
    // 1012px value because it takes away 2 times the column gap (2*8px)
    switch (true) {
      case width <= 464:
        return grid.getColumnsDistance(4);
      case width > 464 && width <= 1012:
        return grid.getColumnsDistance(6);
      case width > 1012:
        return grid.getColumnsDistance(10);
      default:
        return grid.getColumnsDistance(10);
    }
  };
</script>

{#snippet sectionDividers(num: number)}
  {#if num === 1}
    <DividerTrapezoid
      width={setDividerWidth(WINDOW.width)}
      y={isMobile ? 24 : 100}
      w={isMobile ? 24 : 100}
      startEnd={isMobile ? 2 : 3}
    />
  {:else if num === 2}
    <DividerTrapezoid
      width={setDividerWidth(WINDOW.width)}
      y={16}
      w={isMobile ? 16 : 12}
      startEnd={isMobile ? 2 : 3}
    />
    <DividerTrapezoid
      width={setDividerWidth(WINDOW.width)}
      y={16}
      w={isMobile ? 16 : 12}
      startEnd={isMobile ? 2 : 3}
      invert
    />
  {/if}
{/snippet}

<main>
  <section class="hero" style={`--side-padding: ${grid.sidePadding}px`}>
    <article>
      <div>
        <h1>
          <span>{WINDOW.width}</span>
          <span>{grid.widthNoPadding}</span>
        </h1>
      </div>
    </article>
  </section>
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
  />
  <section class="main-content projects"></section>
  {@render sectionDividers(2)}
  <section class="main-content projects">
    <h1>{WINDOW.width}</h1>
  </section>
  {@render sectionDividers(2)}
  <section class="main-content projects"></section>
  {@render sectionDividers(1)}
</main>

<style>
  .main-content {
    background-color: #e9e8e6;
    height: 40svh;
    grid-column: 2 / -2;
  }
  .hero {
    height: calc(100svh - 1.5rem);
    background-color: #e9e8e6;
    grid-column: 1 / -1;
  }
  section {
    border: 1.5px solid blue;
    border-top: 0;
    border-bottom: 0;
    grid-column: 1 / -1;
    width: -webkit-fill-available;
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
  @media (min-width: 480px) {
    .main-content {
      grid-column: 3 / -3;
    }
  }
  @media (min-width: 1029px) {
    .main-content {
      grid-column: 3 / -3;
    }
  }
</style>
