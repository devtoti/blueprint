<script lang="ts">
  import "../../styles.css";
  import "../../tokens.css";
  import "../../styles/text-styles.css";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import PaperBox from "$lib/images/paper-box.svelte";
  import { getContext, onMount } from "svelte";
  import GenericBanner from "$lib/components/GenericBanner.svelte";
  import { GRID } from "$lib/utils/gridData";
  import { setDividerWidth as computeDividerWidth, setupGridResize } from "$lib/utils";
  import HeroContent from "$lib/components/HeroContent.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import { theme, lang } from "$lib/stores";
  import { dictionary } from "$lib/dictionary";
  let WINDOW: { width: number; height: number } = getContext("WINDOW");
  let isMobile = $derived(WINDOW.width <= 464);
  let grid = $state(GRID());
  let isDarkMode = $derived($theme === "dark");
  let currentLanguage = $derived($lang as "en" | "es");
  let hoveredStrategyId = $state(null);

  onMount(() => {
    return setupGridResize(() => {
      grid = GRID();
    });
  });

  const setDividerWidth = (width: number) => computeDividerWidth(width, grid);
  const strategiesList = dictionary["marketing-list"];

  const handleMouseEnter = (strategy: any) => {
    hoveredStrategyId = strategy.title.en;
  };

  const handleMouseLeave = () => {
    hoveredStrategyId = null;
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
    buttonOneText="view-projects"
    buttonOneHref="/#projects"
    buttonTwoText="view-skills"
    buttonTwoHref="/#skills"
    currentPage="Marketing"
    isHome={false}
    HeroImage={PaperBox}
    bgPattern={isDarkMode
      ? "levels-pattern-dark.svg"
      : "levels-pattern-light.svg"}
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
  <section class="main-content marketing grainy">
    <Heading page="marketing" />
    <ul class="arc-body-1">
      {#each strategiesList as strategy}
        <li
          class="strategy-item"
          onmouseenter={() => handleMouseEnter(strategy)}
          onmouseleave={handleMouseLeave}
        >
          <h4 class="strategy-title">
            {strategy.title[currentLanguage]}
          </h4>
          <p
            class="strategy-description"
            class:show={hoveredStrategyId === strategy.title.en}
          >
            {strategy.description[currentLanguage]}
          </p>
        </li>
      {/each}
    </ul>
  </section>
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
    border: 1.5px solid var(--border-tertiary);
    border-top: 0;
    border-bottom: 0;
    height: inherit;
    grid-column: 2 / -2;
    background-color: var(--bg-primary);
    width: -webkit-fill-available;
  }

  .marketing {
    min-height: 60svh;
    grid-template-rows: 200px 1fr;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fill, 60px);
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    grid-column: 1 / -1;
    width: 100%;
    z-index: 10;
  }
  .strategy-item {
    background-color: var(--bg-primary);
    padding: 1rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.2s ease;
    position: relative;
    &:hover {
      background-color: var(--bg-tertiary);
      transform: translateY(-2px);
    }
    .strategy-description {
      position: absolute;
      bottom: 100%;
      right: 0%;
      background-color: var(--bg-secondary);
      color: var(--text-secondary);
      margin: 0;
      padding: 0.5rem;
      font-size: 0.9rem;
      line-height: 1.4;
      border-radius: 4px;
      border: 1px solid var(--border-light);
      z-index: 1000 !important;
      min-width: 160px;
      display: none;
      &.show {
        display: block;
      }
    }
  }
  @media (min-width: 480px) {
    .main-content {
      grid-column: 3 / -3;
    }
  }
  @media (min-width: 720px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
      grid-column: 2 / -2;
    }
  }
  @media (min-width: 1029px) {
    .main-content {
      grid-column: 3 / -3;
    }
    ul {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  :global([data-theme="dark"]) {
    li {
      background-color: var(--bg-secondary);
    }
  }
</style>
