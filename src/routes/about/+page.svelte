<script lang="ts">
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import { getContext, onMount } from "svelte";
  import LandingMidBanner from "$lib/components/LandingMidBanner.svelte";
  import { GRID } from "$lib/utils/gridData";
  let WINDOW: { width: number; height: number } = getContext("WINDOW");
  let isMobile = $derived(WINDOW.width <= 464);
  let grid = $state(GRID());
  onMount(() => {
    grid = GRID();
    window.addEventListener("resize", () => {
      grid = GRID();
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  });
</script>

<main>
  <section class="about-page">
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    </p>
  </section>
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
  />
  <section class="mid-banner-container">
    <LandingMidBanner />
  </section>
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
    invert
  />
</main>

<style>
  section {
    border: 1.5px solid blue;
    background-color: #e9e8e6;
    border-top: 0;
    border-bottom: 0;
    grid-column: 1 / -1;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  .about-page {
    min-height: 100svh;
  }
  .mid-banner-container {
    grid-column: 2 / -2;
  }
  @media (min-width: 464px) {
    .mid-banner-container {
      grid-column: 3 / -3;
    }
  }
</style>
