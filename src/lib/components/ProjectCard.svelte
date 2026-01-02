<script lang="ts">
  import Text from "$lib/components/Text.svelte";
  import Button from "$lib/components/Button.svelte";
  import FigmaIcon from "$lib/icons/GgFigma.svelte";
  import ExternalIcon from "$lib/icons/PajamasExternalLink.svelte";
  let { project } = $props();

  const imageContext = import.meta.glob("$lib/images/*.{svg,png}", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>;
</script>

<div class="new-project-card" tabindex="0" role="button">
  <div class="project-image-container">
    <img
      src={imageContext[`/src/lib/images/${project.image}`]}
      alt={project.title}
      loading="lazy"
      draggable="false"
    />
  </div>

  <div class="project-content">
    <div class="project-title-container">
      <h3 class="arc-h4 project-title">{project.title}</h3>
      {#if project.id === 0}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.25em"
          height="1.25em"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <title>Highlighted Project</title>
          <path
            fill="oklch(79.5% 0.184 86.047)"
            d="M20 2H4v2l5.81 4.36a7.004 7.004 0 0 0-4.46 8.84a6.996 6.996 0 0 0 8.84 4.46a7 7 0 0 0 0-13.3L20 4zm-5.06 17.5L12 17.78L9.06 19.5l.78-3.33l-2.59-2.24l3.41-.29L12 10.5l1.34 3.14l3.41.29l-2.59 2.24z"
          />
        </svg>
      {/if}
    </div>
    <h4 class="arc-h5 project-subheading">{project.subheading}</h4>
    <p class="arc-body-1 project-description">
      <Text
        text="description"
        section="highlighted-projects"
        sectionIx={project.ix}
      />
    </p>
    <div class="chips">
      {#each project.tags as tag}
        <span class="chip arc-body-3">{tag}</span>
      {/each}
    </div>
  </div>
  <div class="project-buttons">
    <Button
      text="Visit Website"
      href={project.url}
      secondary={true}
      invert={true}
      Icon={ExternalIcon}
      external={true}
    />
    <Button
      text="Figma"
      href={project.figmaUrl}
      tertiary={true}
      invert={true}
      Icon={FigmaIcon}
      external={true}
    />
  </div>
</div>

<style>
  /* Base styles */
  .new-project-card {
    grid-column: 1/-1;
    background-color: var(--bg-primary-dark);
    border-radius: 1rem;
    box-shadow: var(--shadow-3);
    padding: 1rem;
    width: 100%;
    min-height: fit-content;
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 1rem;
    z-index: 10;
    overflow: hidden;
  }
  .project-title-container {
    height: 32px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .project-image-container {
    width: 100%;
    aspect-ratio: 16/9;
    max-height: 220px;
    min-height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 0.5rem;
    background-color: #f4f4f4;
    box-sizing: border-box;
    flex-shrink: 0;
  }
  .project-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-height: 0;
    overflow: hidden;
  }
  .project-content h4 {
    color: var(--text-secondary);
    background-color: var(--bg-tertiary);
    font-weight: 700;
    font-size: 10px;
    padding: 0.25rem 0.5rem;
    width: fit-content;
    border-radius: 999rem;
  }
  .project-content h3 {
    display: inline-flex;
  }
  .project-description {
    margin: 0;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
  .chips {
    display: none;
  }
  .project-buttons {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    align-self: flex-end;
  }
  .project-buttons :global(.button-wrapper a) {
    display: flex;
    gap: 0.25rem;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: var(--text-primary);
    border: 1.5px solid var(--border-secondary);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
  }
  .project-buttons :global(.button-wrapper a:hover) {
    border: 1.5px solid var(--border-primary);
  }
  .project-buttons > :global(.button-wrapper:nth-child(1)) {
    flex-grow: 2;
    width: auto;
  }
  .project-buttons > :global(.button-wrapper:nth-child(2)) {
    flex-grow: 1;
    width: auto;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    border-radius: 0.5rem;
    background: #f4f4f4;
    user-select: none;
  }

  /* Unified media queries */
  @media (min-width: 480px),
    (min-width: 720px),
    (min-width: 1029px),
    (min-width: 1920px) {
    /* 480px+ project-image-container overrides */
    .project-image-container {
      max-height: 240px;
      min-height: 160px;
    }
  }

  @media (min-width: 720px) {
    /* 720px+ card and content layout */
    .new-project-card {
      grid-column: span 3;
      aspect-ratio: 1/1.5;
      width: 100%;
      max-width: none;
      max-height: 420px;
    }
    .project-image-container {
      aspect-ratio: 16/8;
      max-height: 180px;
      min-height: 135px;
    }
  }

  @media (min-width: 1029px) {
    /* 1029px+ card max width */
    .project-description {
      border-bottom: 1px solid var(--border-tertiary);
      padding-bottom: 1rem;
    }
    .chips {
      max-width: 100%;
      max-height: 4rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: auto;
      font-style: italic;
    }
    .new-project-card {
      max-width: 350px;
      /* min-height: 520px; */
      aspect-ratio: 1/1.5;
    }
  }

  @media (min-width: 1920px) {
    /* 1920px+ make card more square */
    .new-project-card {
      aspect-ratio: 1/1;
      max-width: 350px;
    }
  }
</style>
