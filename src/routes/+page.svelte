<script lang="ts">
  import { onMount, getContext } from "svelte";
  import "@radix-ui/themes/styles.css";
  import "../styles.css";
  import "../tokens.css";
  import "../styles/text-styles.css";
  import { GRID } from "$lib/utils/gridData";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import HeroContent from "$lib/components/HeroContent.svelte";
  import CTABanner from "$lib/components/CTABanner.svelte";
  import WorkExperience from "$lib/sections/WorkExperience.svelte";
  import Projects from "$lib/sections/Projects.svelte";
  import RadialDeco from "$lib/images/radial-deco.svelte";
  import Services from "$lib/sections/+Services.svelte";
  import Skills from "$lib/sections/+Skills.svelte";
  import Blueprint from "$lib/images/blueprint.svelte";
  import { setDividerWidth as computeDividerWidth } from "$lib/utils";
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
  const setDividerWidth = (width: number) => computeDividerWidth(width, grid);
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
    buttonOneText="contact"
    buttonOneHref="/contact"
    buttonTwoText="resume"
    buttonTwoHref="/docs/Antonio_Ruiz_CV.pdf"
    HeroImage={Blueprint}
    isHome
    currentPage="Home"
    bgPattern="iso-grid.svg"
    children={() => null}
  />

  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
    children={() => null}
  />

  <!-- {@render sectionDividers(2)} -->
  <article class="main-content stripped-divider"></article>
  {@render sectionDividers(2)}
  <section class="main-content work-experience grainy" id="work-experience">
    <WorkExperience />
  </section>
  {@render sectionDividers(2)}
  <section class="main-content projectsx grainy" id="projects">
    <Projects />
  </section>
  {@render sectionDividers(2)}
  <!-- <LandingMidBanner winWidth={WINDOW.width} offset={grid.columnWidth} /> -->
  <article class="main-content stripped-divider"></article>
  {@render sectionDividers(2, true)}
  <section class="main-content skills grainy" id="skills">
    <Skills />
  </section>
  {@render sectionDividers(2, true)}
  <section class="main-content services grainy" id="services">
    <Services />
  </section>
  {@render sectionDividers(2, true)}
  <article class="main-content stripped-divider"></article>
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
  <article class="main-content stripped-divider"></article>
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
  #projects {
    gap: 1rem;
    /* grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); */
    grid-template-rows: auto repeat(auto-fill, minmax(440px, 1fr));
    height: auto;
    width: 100%;
    overflow: visible;
    background-color: var(--sand-radix-100);
  }
  section {
    border: 1.5px solid var(--border-tertiary);
    border-top: 0;
    border-bottom: 0;
    height: inherit;
    grid-column: 2 / -2;
    background-color: var(--bg-primary);
    width: -webkit-fill-available;
  }

  .work-experience {
    min-height: 60svh;
    grid-template-rows: 200px 1fr;
  }
  @media (min-width: 480px) {
    .main-content {
      grid-column: 3 / -3;
    }
    .radial-deco-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
    }

    .work-experience {
      background-image: url("/images/levels-pattern-light.svg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  @media (min-width: 1029px) {
    .main-content {
      grid-column: 3 / -3;
    }
  }
  :global([data-theme="dark"]) {
    section {
      background-color: var(--bg-darksand);
    }
    .work-experience {
      background-image: url("/images/levels-pattern-dark.svg");
    }
  }
</style>
