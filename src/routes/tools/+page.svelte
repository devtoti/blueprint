<script lang="ts">
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import { getContext, onMount } from "svelte";
  import GenericBanner from "$lib/components/GenericBanner.svelte";
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
  <section class="contact-page grainy">
    <article class="section-content hero-content">
      <div class="title">
        <h1 class="text-title barlow-extrabold">Tools</h1>
        <h4 class="text-caption caption">
          Frontend development & design portfolio
        </h4>
      </div>
      <div class="subheader">
        <p class="text-subheader">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
      <div class="buttons">
        <button>Get in touch</button>
      </div>
    </article>
  </section>
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
    children={() => null}
  />
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
  section {
    background-color: var(--bg-primary);
    border-top: 0;
    border-bottom: 0;
    grid-column: 1 / -1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  .contact-page {
    min-height: 100svh;
  }
  .mid-banner-container {
    grid-column: 1 / -1;
  }
  @media (min-width: 464px) {
    .mid-banner-container {
      grid-column: 3 / -3;
    }
  }
</style>
