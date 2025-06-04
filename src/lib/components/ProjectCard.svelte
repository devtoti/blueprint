<script lang="ts">
  let { project, isActive, activeProject = $bindable() } = $props();
  import SolarGlobalOutline from "~icons/solar/global-outline";
  import IconCode from "~icons/solar/code-bold-duotone";
  import PenNib from "$lib/icons/pen-nib.svg";
  import IconWrapper from "$lib/components/IconWrapper.svelte";
  let innerWidth = $state(0);
  function handleClick() {
    activeProject = project;
    if (innerWidth <= 1024) {
      const element = document.getElementById("projects");
      const offset = 64;
      const elementPosition = element?.getBoundingClientRect().top ?? 0;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
</script>

<svelte:window bind:innerWidth />
<button
  class="project-card"
  onclick={handleClick}
  tabindex="0"
  class:active={isActive}
>
  <h3 class="project-number arc-h3">{project.number}</h3>
  <h3 class="arc-h4 project-title">{project.title}</h3>
  <p class="arc-body-1 project-description">{project.description}</p>
  <div class="project-card-icons">
    {#if project.url || project.figmaUrl}
      <div class="icons-wrapper">
        <a href={project.url} target="_blank">
          <IconWrapper Icon={SolarGlobalOutline} />
        </a>
        <a href={project.figmaUrl} target="_blank">
          <IconWrapper Icon={PenNib} />
        </a>
      </div>
    {/if}
  </div>
  <span class="bracket top-left"></span>
  <span class="bracket top-right"></span>
  <span class="bracket bottom-left"></span>
  <span class="bracket bottom-right"></span>
</button>

<style>
  .project-card {
    grid-column: 1 / -1;
    position: relative;
    background-color: var(--bg-primary);
    width: 100%;
    height: 100%;
    border: 1px solid var(--border-tertiary);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    gap: 0.2rem;
    padding: 0.5rem;
    background-image: radial-gradient(var(--bleu-100) 1px, transparent 0);
    background-size: 10px 10px;
    background-position: -5px -5px;
    transition: transform 0.3s ease-in-out;
    .project-title {
      color: var(--text-secondary);
    }
    .project-description {
      color: var(--text-secondary);
    }
    .bracket {
      position: absolute;
      box-sizing: border-box;
      height: 16px;
      width: 16px;
      border: none;
    }
    &:hover {
      background-color: var(--bg-secondary);
      cursor: pointer;
      .bracket {
        position: absolute;
        box-sizing: border-box;
        height: 16px;
        width: 16px;
      }
      .bracket.top-right {
        top: 0;
        right: 0;
        border-top: 1px solid var(--border-secondary);
        border-right: 1px solid var(--border-secondary);
        transition: all 0.6s ease-in-out;
      }
      .bracket.top-left {
        top: 0;
        left: 0;
        border-top: 1px solid var(--border-secondary);
        border-left: 1px solid var(--border-secondary);
        transition: all 0.6s ease-in-out;
      }
      .bracket.bottom-left {
        bottom: 0;
        left: 0;
        border-bottom: 1px solid var(--border-secondary);
        border-left: 1px solid var(--border-secondary);
        transition: all 0.6s ease-in-out;
      }
      .bracket.bottom-right {
        bottom: 0;
        right: 0;
        border-bottom: 1px solid var(--border-secondary);
        border-right: 1px solid var(--border-secondary);
        transition: all 0.6s ease-in-out;
      }
    }
  }
  .icons-wrapper {
    display: flex;
    gap: 0.5rem;
    a {
      margin: 0;
      padding: 0;
    }
  }
  .project-card,
  .project-card.active {
    transition: all 0.6s ease-in-out;
  }
  .project-card.active {
    background-color: var(--bg-secondary);
    .bracket {
      position: absolute;
      box-sizing: border-box;
      height: 16px;
      width: 16px;
    }
    .bracket.top-right {
      top: -6px;
      right: -6px;
      border-top: 2px solid var(--border-primary);
      border-right: 2px solid var(--border-primary);
    }
    .bracket.top-left {
      top: -6px;
      left: -6px;
      border-top: 2px solid var(--border-primary);
      border-left: 2px solid var(--border-primary);
    }
    .bracket.bottom-left {
      bottom: -6px;
      left: -6px;
      border-bottom: 2px solid var(--border-primary);
      border-left: 2px solid var(--border-primary);
    }
    .bracket.bottom-right {
      bottom: -6px;
      right: -6px;
      border-bottom: 2px solid var(--border-primary);
      border-right: 2px solid var(--border-primary);
    }
  }
  .project-card-icons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
  }
  .project-number {
    width: 100%;
    text-align: left;
    color: var(--text-secondary);
  }
  .project-card.active {
    .project-title {
      color: var(--text-primary);
    }
    .project-number {
      color: var(--text-primary);
    }
  }

  :global(.projects-container:has(.project-card:hover))
    .project-card:not(:hover) {
    opacity: 0.8;
  }
  @media (min-width: 480px) {
    .project-card:first-of-type {
      grid-column: 1 / span 3;
    }
    .project-card:nth-of-type(2) {
      grid-column: 4 / span 3;
    }
    .project-card:nth-of-type(3) {
      grid-column: 1 / span 3;
    }
    .project-card:nth-of-type(4) {
      grid-column: 4 / span 3;
    }
  }
  @media (min-width: 1024px) {
    .project-card {
      grid-column: span 4 / -1 !important;
    }
  }
  @media (min-width: 1920px) {
    .project-card {
      grid-column: span 3 / -2;
    }
  }
</style>
