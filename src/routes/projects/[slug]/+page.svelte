<script lang="ts">
  import "../../../styles.css";
  import "../../../tokens.css";
  import "../../../styles/text-styles.css";
  import RadialDeco from "$lib/images/radial-deco.svelte";
  import { getContext, onMount } from "svelte";
  import { GRID } from "$lib/utils/gridData";
  import {
    setupGridResize,
    setDividerWidth as computeDividerWidth,
  } from "$lib/utils";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  let { data } = $props();
  let WINDOW: { width: number; height: number } = getContext("WINDOW");
  const imageContext = import.meta.glob("$lib/images/*.{svg,png}", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>;

  let isMobile = $derived(WINDOW.width <= 464);
  let grid = $state(GRID());
  onMount(() => {
    return setupGridResize(() => {
      grid = GRID();
    });
  });
  const project = data.project;
  const projectImageSrc = project.image
    ? imageContext[`/src/lib/images/${project.image}`]
    : undefined;
  const setDividerWidth = (width: number) => computeDividerWidth(width, grid);
</script>

{#snippet renderList(title: string, content: any)}
  {#if content}
    <div class="content-row">
      <article class="content-block" id={title}>
        <h3 class="arc-h3">{title}</h3>
        <ul>
          {#each Object.values(content) as value, idx}
            <li class="arc-body-2">{idx + 1}. {value}</li>
          {/each}
        </ul>
      </article>
      <aside class="illustration-area">
        <!-- illustration / image slot for {title} -->
      </aside>
    </div>
  {/if}
{/snippet}
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
  <DividerTrapezoid
    width={setDividerWidth(WINDOW.width)}
    y={isMobile ? 16 : 12}
    w={isMobile ? 16 : 12}
    startEnd={isMobile ? 2 : 3}
    invert
    children={() => null}
  />
  <article class="main-content stripped-divider"></article>
  {@render sectionDividers(2)}
  <section class="main-content project-page grainy">
    <header class="project-page-header">
      <p class="arc-h5 text-caption">
        {project.number}{project.subheading ? ` • ${project.subheading}` : ""}
      </p>
      <h1 class="arc-h2">{project.title}</h1>
      <p class="arc-body-1">{project.overview}</p>
    </header>

    <article class="gallery-full" id="gallery">
      {#if projectImageSrc}
        <img src={projectImageSrc} alt={project.title} />
      {/if}
    </article>

    <article class="content-block" id="context">
      <h3 class="arc-h3">Context</h3>
      <p class="arc-body-1">{project.context}</p>
    </article>
  </section>
  {@render sectionDividers(2)}
  <section class="main-content project-page grainy">
    {@render renderList("Challenges", project.challenges)}
    {@render renderList("Objectives", project.objectives)}
    {@render renderList("Approach", project.approach)}
  </section>
  {@render sectionDividers(2)}
  <section class="main-content project-page grainy">
    {@render renderList("Results", project.results)}
    {@render renderList("Learnings", project.learnings)}
    {@render renderList("Next steps", project.nextSteps)}
    <div class="tag-container arc-body-2">
      {#each project.tags as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>
  </section>
  {@render sectionDividers(2)}
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
  <!-- <nav aria-label="Project articles">
    <ul>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#details">Details</a></li>
        <li><a href="#overview">Overview</a></li>
      <li><a href="#approach">Approach</a></li>
      <li><a href="#results">Results</a></li>
      <li><a href="#tags">Tags</a></li>
    </ul>
    </nav> -->
</main>

<style>
  .tag-container {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    flex-wrap: wrap;
    .tag {
      background-color: var(--bg-light);
      padding: 0.1rem 0.5rem;
      border-radius: 0.25rem;
      color: var(--text-secondary);
      border: 1px solid var(--border-light);
    }
  }
  .project-page {
    justify-items: stretch;
    padding-top: 1.5rem;
    row-gap: 1.5rem;
  }
  .project-page h2,
  .project-page p,
  .project-page ul,
  .project-page li {
    margin: 0;
    padding: 0;
  }
  .project-page-header {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .gallery-full {
    grid-column: 1 / -1;
  }
  .gallery-full img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 2px;
    border: 1px solid var(--border-tertiary);
  }
  .content-row {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%;
  }
  .tag-container {
    grid-column: 1 / -1;
  }
  .content-block {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  #context {
    grid-column: 1 / -1;
  }
  .illustration-area {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-height: 120px;
    border: 1px dashed var(--border-tertiary);
    border-radius: 2px;
    padding: 0.5rem;
  }
  li {
    list-style: none;
    line-height: 1.8;
  }
  ul {
    display: flex;
    flex-direction: column;
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
    .project-page-header {
      grid-column: 1 / span 4;
    }
  }
  @media (min-width: 1029px) {
    .content-row {
      grid-template-columns: 1fr 1fr;
    }
    .main-content {
      grid-column: 3 / -3;
    }
    .project-page-header {
      grid-column: 2 / -2;
    }
    .content-row,
    .gallery-full,
    #context {
      grid-column: 2 / -2;
    }
  }
  :global([data-theme="dark"]) {
    section {
      background-color: var(--bg-darksand);
    }
  }
</style>
