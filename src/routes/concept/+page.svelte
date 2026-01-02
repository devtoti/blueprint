<script lang="ts">
  import "../../styles.css";
  import "../../tokens.css";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import { getContext, onMount } from "svelte";
  import GenericBanner from "$lib/components/GenericBanner.svelte";
  import ArchUIBanner from "$lib/components/ArchUIBanner.svelte";
  import { GRID } from "$lib/utils/gridData";
  import HeroContent from "$lib/components/HeroContent.svelte";
  import IsoCube from "$lib/images/iso-cube.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import IsoCubeDark from "$lib/images/iso-cube-dark.svelte";
  import { setDividerWidth as computeDividerWidth } from "$lib/utils";
  import { theme } from "$lib/stores";
  let isDarkMode = $derived($theme === "dark");
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
  const setDividerWidth = (width: number) => computeDividerWidth(width, grid);
  const imageContext = import.meta.glob("$lib/images/*.{svg,png}", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>;
</script>

{#snippet sectionDividers(num: number, invert = false)}
  {#if num === 1}
    <DividerTrapezoid
      width={setDividerWidth(WINDOW.width)}
      y={isMobile ? 24 : 100}
      w={isMobile ? 24 : 100}
      startEnd={isMobile ? 2 : 3}
      {invert}
      children={() => null}
    />
  {:else if num === 2}
    <DividerTrapezoid
      width={setDividerWidth(WINDOW.width)}
      y={16}
      w={isMobile ? 16 : 12}
      startEnd={isMobile ? 2 : 3}
      children={() => null}
    />
    <DividerTrapezoid
      width={setDividerWidth(WINDOW.width)}
      y={16}
      w={isMobile ? 16 : 12}
      startEnd={isMobile ? 2 : 3}
      invert
      children={() => null}
    />
  {/if}
{/snippet}
<main>
  <HeroContent
    currentPage="Concept"
    isHome={false}
    bgPattern="iso-grid.svg"
    buttonOneText="development"
    buttonOneHref="/#projects"
    buttonTwoText="design"
    buttonTwoHref="https://github.com/devtoti/archui-lib"
    HeroImage={isDarkMode ? IsoCubeDark : IsoCube}
    children={() => null}
  />
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
    children={() => null}
  />
  <article class="main-content stripped-divider"></article>
  {@render sectionDividers(2)}
  <section class="main-content archui grainy" id="archui">
    <Heading page="archui" />
    <img
      src={imageContext[`/src/lib/images/archui-header-min.png`]}
      alt="Screenshot of the ArchUI Design System preview, demonstrating the visual layout and modular components of the system"
      loading="lazy"
      draggable="false"
      aria-labelledby="archui-caption"
    />
    <img
      src={imageContext[`/src/lib/images/archui-classical-orders-min.png`]}
      alt="Screenshot of the ArchUI Design System classical orders, demonstrating three classical columns with different chapiters"
      loading="lazy"
      draggable="false"
      aria-labelledby="archui-classical-orders-caption"
    />
  </section>
  <ArchUIBanner />
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
  .archui > * {
    grid-column: 1 / -1;
  }
  .archui img {
    border-radius: 1rem;
    width: 100%;
    grid-column: 1 / -1;
    border: 1.5px solid var(--border-light);
    box-shadow: var(--shadow-3);
  }
  section {
    border: 1.5px solid var(--border-tertiary);
    border-top: 0;
    border-bottom: 0;
    height: inherit;
    /* grid-column: 3 / -3; */
    background-color: var(--bg-primary);
    width: -webkit-fill-available;
  }

  @media (min-width: 460px) {
    section,
    .stripped-divider {
      grid-column: 3 / -3;
    }
    .archui > * {
      grid-column: 2 / -2;
    }
  }

  @media (min-width: 1024px) {
    .archui img,
    :global(.heading) {
      width: 100%;
      grid-column: 2 / -2 !important;
    }
  }
</style>
