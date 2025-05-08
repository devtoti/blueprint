<script lang="ts">
  let { experience } = $props();
  import IconCode from "~icons/solar/code-bold-duotone";
  import PenNib from "$lib/icons/pen-nib.svg";
</script>

<div class="experience-card">
  <div class="experience-card-icon">
    {#if experience.role === "Frontend Developer"}
      <IconCode />
    {:else}
      <img src="src/lib/icons/pen-nib.svg" alt="Pen Nib" />
    {/if}
    <span></span><span></span><span></span><span></span>
  </div>
  <h3>{experience.role}</h3>
  <p>{experience.description}</p>
</div>

<style>
  .experience-card {
    background-color: var(--bg-secondary);
    width: 260px;
    min-height: 80px;
    border: 1px solid var(--border-tertiary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 2s ease-in-out;
    gap: 0.2rem;
    padding: 0.5rem;
    padding-top: 1rem;
    background-image: radial-gradient(var(--bleu-200) 1px, transparent 0);
    background-size: 10px 10px;
    background-position: -5px -5px;
    h3 {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--text-primary);
      letter-spacing: 0.05em;
      font-weight: 600;
      text-transform: uppercase;
    }
    p {
      font-size: 0.8rem;
      color: var(--text-secondary);
    }
  }
  .experience-card-icon {
    width: 24px;
    height: 24px;
    background-color: var(--bg-tertiary);
    color: var(--icon-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 0.5rem;
    span:first-of-type {
      position: absolute;
      inset: 0 auto;
      width: 28px;
      height: 1px;
      border-top: 1px solid var(--border-tertiary);
    }
    span:nth-of-type(2) {
      position: absolute;
      inset: auto 0 auto auto;
      width: 1px;
      height: 28px;
      border-left: 1px solid var(--border-tertiary);
    }
    span:nth-of-type(3) {
      position: absolute;
      inset: auto auto 0 auto;
      width: 28px;
      height: 1px;
      border-bottom: 1px solid var(--border-tertiary);
    }
    span:last-of-type {
      position: absolute;
      inset: auto auto auto 0;
      width: 1px;
      height: 28px;
      border-left: 1px solid var(--border-tertiary);
    }
  }
  .experience-card:nth-child(odd) {
    align-items: flex-end;
  }
  .experience-card:hover {
    height: 480px;
    transition: all 2s ease-in-out;
  }
</style>
