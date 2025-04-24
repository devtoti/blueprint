<script lang="ts">
  import { onMount, getContext } from "svelte";
  import "@radix-ui/themes/styles.css";
  import "../styles.css";
  import "../tokens.css";
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
  <section class="hero grainy">
    <article class="section-content hero-content">
      <div class="title">
        <h1 class="barlow-extrabold">Blueprint.dev</h1>
        <h4 class="caption">Frontend development & design portfolio</h4>
      </div>
      <div class="subheader">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
      <div class="buttons">
        <button>Get in touch</button>
        <button>Get in touch</button>
      </div>
    </article>
  </section>
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
  />
  <section class="main-content projects grainy">
    <article class="section-content">
      <h2>Projects</h2>
    </article>
  </section>
  {@render sectionDividers(2)}
  <section class="main-content projects grainy">
    <h1>{WINDOW.width}</h1>
  </section>
  {@render sectionDividers(2)}
  <section class="main-content projects grainy">
    <article class="section-content">
      <h2>Projects</h2>
    </article>
  </section>
  {@render sectionDividers(1)}
  <LandingMidBanner />
  {@render sectionDividers(1, "invert")}
  <section class="main-content projects grainy">
    <article class="section-content">
      <h2>Projects</h2>
    </article>
  </section>
  {@render sectionDividers(2)}
  <section class="main-content projects grainy">
    <article class="section-content">
      <h2>Projects</h2>
    </article>
  </section>
  <DividerTrapezoid
    width={setDividerWidth(WINDOW.width)}
    y={isMobile ? 16 : 12}
    w={isMobile ? 16 : 12}
    startEnd={isMobile ? 2 : 3}
  />
  <CTABanner />
  <DividerTrapezoid
    width={setDividerWidth(WINDOW.width)}
    y={isMobile ? 16 : 12}
    w={isMobile ? 16 : 12}
    startEnd={isMobile ? 2 : 3}
    invert
  />
  <section class="main-content stripped-divider"></section>
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
    invert
  />
</main>

<style>
  .main-content {
    position: relative;
    background-color: var(--bg-primary);
    height: 40svh;
    grid-column: 2 / -2;
  }
  /* .hero {
    height: calc(100svh - 1.5rem);
    background-color: var(--bg-secondary);
    border: 0;
  } */
  .hero {
    position: relative;
    height: 100svh;
    place-items: center;
    /* place-content: center; */
  }
  .section-content {
    grid-column: 2 / -2;
  }
  section {
    border: 1.5px solid var(--border-secondary);
    min-height: 100%;
    border-top: 0;
    border-bottom: 0;
    height: inherit;
    grid-column: 1 / -1;
    background-color: var(--bg-primary);
    width: -webkit-fill-available;
    /* padding: 0 calc(var(--side-padding-mobile) + var(--col-gap)); */
  }
  .hero-content {
    place-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--text-primary);
    div {
      display: flex;
      flex-direction: column;
    }
    div > * {
      display: inline-block;
      text-align: center;
    }
    div.title {
      font-size: 2.5rem;
      text-transform: uppercase;
      font-weight: 900;
      h1 {
        background: -webkit-linear-gradient(
          left,
          var(--bleu-400),
          var(--bleu-600)
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      h4 {
        font-size: 1rem;
        background: none;
        color: var(--text-accent);
      }
    }
    div.subheader {
      font-size: 1.2rem;
    }
    div.buttons {
      flex-direction: row;
      gap: 1rem;
      button {
        background-color: var(--blue-radix-800);
        border: 0;
        height: 3rem;
        text-transform: uppercase;
        color: var(--white);
        font-weight: 600;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
      }
    }
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
