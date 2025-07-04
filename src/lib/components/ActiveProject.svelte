<script lang="ts">
  let { project, ix } = $props();
  import "../../styles/text-styles.css";
  import SolarLinkMinimalistic2Bold from "~icons/solar/link-minimalistic-2-bold";
  import FigmaIcon from "$lib/icons/figma.svelte";
  import IconWrapper from "$lib/components/IconWrapper.svelte";
  import Text from "$lib/components/Text.svelte";
  import { dictionary } from "$lib/dictionary";
  import { lang } from "$lib/stores";
  const imageContext = import.meta.glob("$lib/images/*.{svg,png}", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>;
  const lan = $derived($lang as "en" | "es");
  const bullets = $derived(dictionary["highlighted-projects"][ix].bullets);
</script>

{#snippet bullet(blt: any, id: number)}
  <div class="bullet">
    <h3 class="arc-h4">
      {blt.title[lan]}
    </h3>
    <p class="arc-body-1">{blt.description[lan]}</p>
  </div>
{/snippet}

<div class="active-project">
  <div class="heading">
    <h2 class="arc-h1 project-id">
      0{project.id}
    </h2>
    <div class="icons-wrapper">
      <a href={project.url} target="_blank">
        <IconWrapper Icon={SolarLinkMinimalistic2Bold} />
      </a>
      <a href={project.figmaUrl} target="_blank">
        <IconWrapper Icon={FigmaIcon} />
      </a>
    </div>
  </div>
  <h3 class="arc-h3">
    {project.title}
  </h3>
  <p class="arc-body-1">
    <Text text="description" section="highlighted-projects" sectionIx={ix} />
  </p>
  <div class="tags">
    {#each project.tags as tag}
      <span class="tag arc-input"><strong>#</strong>{tag}</span>
    {/each}
  </div>
</div>
<div class="preview" id="preview">
  <img
    src={imageContext[`/src/lib/images/${project.image}`]}
    alt={project.title}
  />
  <img
    class="blurred"
    src={imageContext[`/src/lib/images/${project.image}`]}
    alt={project.title}
  />
</div>
{#if bullets}
  <article class="bullets">
    {#each bullets as blt, ix}
      {@render bullet(blt, ix)}
    {/each}
  </article>
{/if}

<style>
  .preview,
  .bullets,
  .active-project {
    grid-column: 1 / -1;
  }
  .active-project {
    grid-row: 2 / 3;
  }
  .bullets {
    grid-row: 4 / 5;
    display: none;
  }
  .preview {
    grid-row: 3 / span 1;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    img:not(.blurred) {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    img.blurred {
      filter: blur(20px);
      transform: rotate(180deg);
      height: 100%;
      opacity: 0.75;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 9;
    }
  }

  .preview {
    grid-row: 3 / 5;
  }
  .active-project {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: min-content;
    h3 {
      color: var(--text-primary);
    }
    h2 {
      padding-bottom: 0rem !important;
    }
  }
  .tags {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    justify-content: center;
  }
  .tag {
    padding: 0.25rem 0.5rem;
    /* border: 1px solid var(--border-primary); */
    color: var(--text-primary);
    strong {
      color: var(--text-primary);
      padding-right: 0.25rem;
    }
  }
  .heading {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    width: 100%;
    .project-id {
      grid-column: 2 / 3;
    }
  }
  .icons-wrapper {
    grid-column: 3 / 4;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .icons-wrapper {
    margin-left: auto;
    a {
      padding: 0 0.25rem;
    }
  }
  @media (min-width: 480px) {
    .preview {
      grid-row: 3 / span 2;
    }
  }
  @media (min-width: 1024px) {
    .project-id {
      grid-column: 1 / 2 !important;
    }
    .active-project,
    .bullets,
    .preview {
      grid-column: 1 / span 6;
      align-items: flex-start;
      text-align: left;
    }
    .bullets {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      grid-row: 5 / 6;
      .bullet {
        display: grid;
        grid-template-rows: min-content auto;
        row-gap: 0.5rem;
        h3 {
          align-self: start;
          font-size: clamp(0.8rem, 1.5vw, 1rem);
        }
      }
    }
    .bullet {
      flex: 1;
      height: 100%;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      border: 1px solid var(--border-light);
    }
    .tags {
      justify-content: flex-start;
    }
  }
  @media (min-width: 1920px) {
    .active-project,
    .bullets,
    .preview {
      grid-column: 2 / span 5;
      align-items: flex-start;
      text-align: left;
    }
    .bullets {
      grid-column: 2 / span 3;
    }
  }
  :global([data-theme="dark"]) {
    .tag {
      color: var(--text-tertiary);
      strong {
        color: var(--text-tertiary);
      }
    }
  }
  .service {
    user-select: text;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
  }
</style>
