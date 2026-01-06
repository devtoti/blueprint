<script lang="ts">
  import { page } from "$app/state";
  import "../styles.css";
  import "../tokens.css";
  import "../styles/text-styles.css";
  import HeroContent from "$lib/components/HeroContent.svelte";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import { getContext, onMount } from "svelte";
  import { GRID } from "$lib/utils/gridData";
  import { setupGridResize } from "$lib/utils";
  let WINDOW: { width: number; height: number } = getContext("WINDOW");
  let isMobile = $derived(WINDOW.width <= 464);
  let grid = $state(GRID());
  onMount(() => {
    return setupGridResize(() => {
      grid = GRID();
    });
  });
</script>

<main>
  <HeroContent
    currentPage="Error"
    buttonOneText="Volver al inicio"
    buttonOneHref="/"
    buttonTwoText="Contáctame"
    buttonTwoHref="/contact"
    children={() => null}
    bgPattern="iso-grid.svg"
    HeroImage={null}
    isHome={false}
  />
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
    children={() => null}
  />
  <article class="main-content stripped-divider"></article>
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
    invert
    children={() => null}
  />
</main>

<style>
  @media (min-width: 480px) {
    .main-content {
      grid-column: 3 / -3;
    }
  }
</style>
