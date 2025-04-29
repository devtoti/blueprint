<script lang="ts">
  import { onMount, getContext } from "svelte";
  import "@radix-ui/themes/styles.css";
  import "../styles.css";
  import "../tokens.css";
  import { GRID } from "$lib/utils/gridData";
  import LandingMidBanner from "$lib/components/LandingMidBanner.svelte";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import CTABanner from "$lib/components/CTABanner.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import WorkExperience from "$lib/sections/WorkExperience.svelte";
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
        <h1 class="text-title barlow-extrabold">Blueprint.dev</h1>
        <h4 class="text-caption">Frontend development & design portfolio</h4>
      </div>
      <div class="subheader">
        <p class="text-subheader">
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
    <WorkExperience />
  </section>
  {@render sectionDividers(2)}
  <section class="main-content projects grainy">
    <Heading
      heading="Proyectos Destacados"
      subheading="Cuatro proyectos de contratación directa han sido seleccionados, siendo éstos principalmente páginas web con un tratamiento único de brand design e implementación con código. Los proyectos de diseño han sido realizados con Figma, Illustrator y Photoshop, mientras que la traducción a código ha sido con React y Svelte."
      alignRight
    />
  </section>
  {@render sectionDividers(2)}
  <section class="main-content projects grainy">
    <Heading
      heading="Enfoque Dual Diseño-Código"
      subheading="Los sitios web exitosos requieren comprensión de diseño y desarrollo de manera integral. Por ello, la colaboración entre diseñadores y programadores para cerrar brechas resulta esencial."
    />
  </section>
  {@render sectionDividers(1)}
  <LandingMidBanner offset={grid.columnWidth} />
  {@render sectionDividers(1, "invert")}
  <section class="main-content projects grainy">
    <Heading
      heading="Servicios Disponibles"
      subheading="Ofrezco una amplia gama de servicios afines al diseño y el desarrollo de aplicaciones web."
      alignRight
    />
  </section>
  {@render sectionDividers(2)}
  <section class="main-content projects grainy"></section>
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .hero {
    position: relative;
    height: 100svh;
    place-items: center;
    background-image: url("src/lib/images/iso-grid.svg");
    background-size: cover;
    background-position: center;
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
