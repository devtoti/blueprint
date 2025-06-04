<script lang="ts">
  import { onMount, getContext } from "svelte";
  import "@radix-ui/themes/styles.css";
  import "../styles.css";
  import "../tokens.css";
  import { GRID } from "$lib/utils/gridData";
  import LandingMidBanner from "$lib/components/LandingMidBanner.svelte";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import HeroContent from "$lib/components/HeroContent.svelte";
  import CTABanner from "$lib/components/CTABanner.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import WorkExperience from "$lib/sections/WorkExperience.svelte";
  import MainIllustration from "$lib/images/main-illustration.svelte";
  import Projects from "$lib/sections/Projects.svelte";
  import RadialDeco from "$lib/images/radial-deco.svelte";
  import Hero from "$lib/sections/Hero.svelte";
  import Services from "$lib/sections/+Services.svelte";
  import Skills from "$lib/sections/+Skills.svelte";
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
    title="Blueprint.dev()"
    subheading="UX Research • UI Design • Development"
    description="Producción de páginas y aplicaciones web de vanguardia altamente personalizables y accesibles. Diseño paramétrico adaptativo apegado a los principios de usabilidad y de diseño."
    buttonOneText="Contáctame"
    buttonOneHref="/contact"
    buttonTwoText="Resumé"
    buttonTwoHref="/contact"
  />
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
    children={() => null}
  />

  <section class="main-content work-experience grainy">
    <WorkExperience />
  </section>
  {@render sectionDividers(2)}
  <section class="main-content projects grainy" id="projects">
    <Projects />
  </section>
  {@render sectionDividers(1)}
  <LandingMidBanner winWidth={WINDOW.width} offset={grid.columnWidth} />
  {@render sectionDividers(1, "invert")}
  <section class="main-content skills grainy">
    <Skills />
  </section>
  {@render sectionDividers(2, "invert")}
  <section class="main-content services grainy">
    <Services />
  </section>
  {@render sectionDividers(2, "invert")}
  <section class="main-content stripped-divider"></section>
  <DividerTrapezoid
    width={setDividerWidth(WINDOW.width)}
    y={isMobile ? 16 : 12}
    w={isMobile ? 16 : 12}
    startEnd={isMobile ? 2 : 3}
    children={() => null}
  />
  <CTABanner />
  <DividerTrapezoid
    width={setDividerWidth(WINDOW.width)}
    y={isMobile ? 16 : 12}
    w={isMobile ? 16 : 12}
    startEnd={isMobile ? 2 : 3}
    invert
    children={() => null}
  />
  <section class="main-content stripped-divider"></section>
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
    invert
  >
    <div class="radial-deco-wrapper">
      <RadialDeco />
    </div>
  </DividerTrapezoid>
</main>

<style>
  .main-content {
    position: relative;
    background-color: var(--bg-primary);
    min-height: 10svh;
    padding: 0 1rem 1rem 1rem;
    row-gap: 8px;
    grid-column: 2 / -2;
    flex-direction: column;
  }
  .projects {
    grid-template-rows: 3rem repeat(4, 1fr);
  }
  .work-experience {
    background-image: url("src/lib/images/levels-pattern-cdmx-gray.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  section {
    border: 1.5px solid var(--border-secondary);
    border-top: 0;
    border-bottom: 0;
    height: inherit;
    grid-column: 1 / -1;
    background-color: var(--bg-primary);
    width: -webkit-fill-available;
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
  .radial-deco-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
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
