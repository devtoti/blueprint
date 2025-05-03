<script lang="ts">
  let { project } = $props();
  import IconCode from "~icons/solar/code-bold-duotone";
  import PenNib from "$lib/icons/pen-nib.svg";
  import IconWrapper from "$lib/components/IconWrapper.svelte";
</script>

<div class="project-card">
  <h3 class="project-number arc-h3">{project.number}</h3>
  <h3 class="arc-h3">{project.title}</h3>
  <p class="arc-body-1">{project.description}</p>
  <div class="project-card-icons">
    <IconWrapper Icon={IconCode} />
    <IconWrapper Icon={PenNib} />
  </div>
</div>

<style>
  .project-card {
    background-color: var(--bg-primary);
    width: 100%;
    min-height: 80px;
    border: 1px solid var(--border-tertiary);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.2rem;
    padding: 0.5rem;
    padding-top: 1rem;
    background-image: radial-gradient(var(--bleu-200) 1px, transparent 0);
    background-size: 10px 10px;
    background-position: -5px -5px;
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
</style>
