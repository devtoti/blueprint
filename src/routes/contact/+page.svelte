<script lang="ts">
  import "../../styles.css";
  import "../../tokens.css";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import Text from "$lib/components/Text.svelte";
  import RadialDeco from "$lib/images/radial-deco.svelte";
  import PortalDorico from "$lib/images/portal-dorico.svelte";
  import HeroContent from "$lib/components/HeroContent.svelte";
  import { getContext, onMount } from "svelte";
  import GenericBanner from "$lib/components/GenericBanner.svelte";
  import { GRID } from "$lib/utils/gridData";
  import { setupGridResize } from "$lib/utils";
  import CalendlyWidget from "$lib/components/CalendlyWidget.svelte";

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
  <section
    class="hero-main contact-section"
    style="background-image: url('./images/iso-grid.svg');background-size: cover;background-position: center;background-repeat: repeat;"
  >
    <article class="hero-text section-content">
      <div class="title">
        <h1 class="text-title barlow-extrabold arc-h2">
          <Text section="Contact" text="heading" />
        </h1>
        <h2 class="text-caption caption arc-h4">
          <Text section="Contact" text="description" />
        </h2>
      </div>
      <div class="subheader">
        <p class="text-subheader arc-body-1">
          <Text section="Contact" text="subheading" />
        </p>
      </div>
    </article>
    <CalendlyWidget />
  </section>

  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
  >
    <div class="radial-deco-wrapper">
      <RadialDeco />
    </div>
  </DividerTrapezoid>
  <GenericBanner href="/contact" buttonText="contact" />
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
  .hero-main {
    background-color: var(--bg-secondary);
    width: 100%;
    min-height: 75svh;
    grid-column: 1 / -1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    row-gap: 1rem;
    position: relative;
  }
  .section-content,
  .hero-text {
    border-top: 0;
    border-bottom: 0;
    grid-column: 2 / -2;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  .text-caption {
    color: var(--text-dark);
  }
  .hero-main {
    min-height: 75svh;
    padding: 2rem 0;
  }
  .text-subheader {
    margin-top: 0.5rem;
    max-width: 60ch;
  }
  @media (min-width: 720px) {
    .hero-text {
      grid-column: 3 / span 3;
      display: flex;
      text-align: left;
      gap: 0rem;
      align-items: flex-start;
    }
    .hero-main {
      grid-template-rows: 2fr 0.5fr;
      min-height: 65svh !important;
    }
  }
  @media (min-width: 1024px) {
    .hero-text {
      grid-column: 4 / span 4;
    }

    .title {
      h1 {
        margin-bottom: -4px;
      }
    }
  }
  :global([data-theme="dark"]) {
    .hero-main {
      background-color: var(--bg-darksand);
    }
  }
</style>
