<script lang="ts">
  let { project } = $props();
</script>

<div class="active-project">
  <h3 class="arc-h2">{project.title}</h3>
  <p class="arc-body-1">{project.description}</p>
  <div class="tags">
    {#each project.tags as tag}
      <span class="tag arc-h5">{tag}</span>
    {/each}
  </div>
</div>

<style>
  .active-project {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: min-content;
    h3 {
      font-weight: 600;
      color: var(--text-primary);
    }
  }
  .tags {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .tag {
    background-color: var(--bleu-50);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
  @media (min-width: 1024px) {
    .active-project {
      grid-column: 1 / span 6;
    }
  }
</style>
