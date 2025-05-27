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
    <a {href} class="arc-button-primary arc-h3 button-text" class:invert>
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
    <a {href} class="arc-button-secondary arc-h3" class:invert>
      {text}
    </a>
  </div>
{/if}

<style>
  .button-wrapper {
    width: fit-content;
    min-width: 10rem;
    height: fit-content;
  }
</style>
