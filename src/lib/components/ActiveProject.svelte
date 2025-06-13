<script lang="ts">
  let { project } = $props();
  import "../../styles/text-styles.css";
  const imageContext = import.meta.glob("$lib/images/*.png", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>;
</script>

{#snippet bullet(title: string, description: string)}
  <div class="bullet">
    <h3 class="arc-h4">{title}</h3>
    <p class="arc-body-1">{description}</p>
  </div>
{/snippet}

<div class="active-project">
  <h2 class="arc-h1">{project.number}</h2>
  <h3 class="arc-h3">{project.title}</h3>
  <p class="arc-body-1">{project.description}</p>
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
{#if project.bullets}
  <article class="bullets">
    {#each project.bullets as entry}
      {@render bullet(entry.title, entry.description)}
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
    border: 1px solid var(--gray-alpha-20);
    color: var(--gray-alpha-50);
    strong {
      color: var(--gray-alpha-70);
      padding-right: 0.25rem;
    }
  }
  @media (min-width: 480px) {
    .preview {
      grid-row: 3 / span 2;
    }
  }
  @media (min-width: 1024px) {
    .active-project,
    .bullets,
    .preview {
      grid-column: 1 / span 6;
      align-items: flex-start;
      text-align: left;
    }
    .bullets {
      display: flex;
      gap: 1rem;
      grid-row: 5 / 6;
      .bullet {
        display: grid;
        grid-template-rows: 1.5rem auto;
        row-gap: 0.5rem;
        h3 {
          align-self: start;
        }
      }
    }
    .bullet {
      flex: 1;
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
</style>
