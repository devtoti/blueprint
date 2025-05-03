<script lang="ts">
  let { project, isActive, activeProject = $bindable() } = $props();
  import IconCode from "~icons/solar/code-bold-duotone";
  import PenNib from "$lib/icons/pen-nib.svg";
  import IconWrapper from "$lib/components/IconWrapper.svelte";
  function handleClick() {
    activeProject = project;
    const element = document.getElementById("projects");
    const offset = 64;
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
</script>

<button
  class="project-card"
  onclick={handleClick}
  tabindex="0"
  class:active={isActive}
>
  <h3 class="project-number arc-h3">{project.number}</h3>
  <h3 class="arc-h3">{project.title}</h3>
  <p class="arc-body-1">{project.description}</p>
  <div class="project-card-icons">
    <IconWrapper Icon={IconCode} />
    <IconWrapper Icon={PenNib} />
  </div>
  <span class="bracket top-left"></span>
  <span class="bracket top-right"></span>
  <span class="bracket bottom-left"></span>
  <span class="bracket bottom-right"></span>
</button>

<style>
  .project-card {
    position: relative;
    background-color: var(--bg-primary);
    width: 100%;
    min-height: 80px;
    max-height: 100%;
    border: 1px solid var(--border-tertiary);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.2rem;
    padding: 0.5rem;
    background-image: radial-gradient(var(--bleu-100) 1px, transparent 0);
    background-size: 10px 10px;
    background-position: -5px -5px;
    transition: transform 0.3s ease-in-out;
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
  .project-card.active {
    background-color: var(--bleu-50);
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
    text-align: end;
    color: var(--text-secondary);
  }

  :global(.projects-container:has(.project-card:hover))
    .project-card:not(:hover) {
    opacity: 0.8;
  }
</style>
