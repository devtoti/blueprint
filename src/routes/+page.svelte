<script lang="ts">
  import { onMount, getContext } from "svelte";
  import "../styles.css";
  import { GRID } from "$lib/utils/gridData";
  import LandingMidBanner from "$lib/components/LandingMidBanner.svelte";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import CTABanner from "$lib/components/CTABanner.svelte";
  let grid = $state<ReturnType<typeof GRID>>(GRID());
  let WINDOW: { width: number; height: number } = getContext("WINDOW");

  onMount(() => {
    grid = GRID();
    window.addEventListener("resize", () => {
      grid = GRID();
    });
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

{#snippet sectionDividers(num: number, invert = false)}
  {#if num === 1}
    <DividerTrapezoid
      width={setDividerWidth(WINDOW.width)}
      y={isMobile ? 24 : 100}
      w={isMobile ? 24 : 100}
      startEnd={isMobile ? 2 : 3}
      {invert}
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
          <span>Hello</span>
          <span>World</span>
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
  <LandingMidBanner />
  {@render sectionDividers(1, "invert")}
  <section class="main-content projects"></section>
  {@render sectionDividers(2)}
  <section class="main-content projects"></section>
  {@render sectionDividers(2)}
  <section class="main-content stripped-divider"></section>
  <DividerTrapezoid
    width={setDividerWidth(WINDOW.width)}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
  />
  <CTABanner />
  <DividerTrapezoid
    width={setDividerWidth(WINDOW.width)}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
    invert
  />
  <section class="main-content stripped-divider"></section>
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
    grid-column: 2 / -2;
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
