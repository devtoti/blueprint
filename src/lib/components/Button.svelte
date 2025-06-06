<script lang="ts">
  let {
    text = "Click aquí",
    href = "/",
    primary = false,
    secondary = false,
    invert = false,
  } = $props();
</script>

{#if primary}
  <div class="button-wrapper">
    <a {href} class="arc-button-primary arc-h4 button-text" class:invert>
      {text}
    </a>
    <span class="square top-left"></span>
    <span class="square top-right"></span>
    <span class="square bottom-left"></span>
    <span class="square bottom-right"></span>
  </div>
{/if}
{#if secondary}
  <div class="button-wrapper">
    <a {href} class="arc-button-secondary arc-h4" class:invert>
      {text}
    </a>
  </div>
{/if}

<style>
  .button-wrapper {
    width: 100%;
    min-width: 10rem;
    height: 2rem;
  }
  .arc-h4 {
    font-weight: 600;
    padding: 0.25rem 0 !important;
  }
  @media (min-width: 480px) {
    .button-wrapper {
      height: 2.5rem;
    }
  }
</style>
