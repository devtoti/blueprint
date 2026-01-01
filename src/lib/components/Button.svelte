<script lang="ts">
  let {
    text,
    href = "/",
    primary = false,
    secondary = false,
    invert = false,
    lg = false,
    md = false,
    sm = false,
  } = $props();
  import Text from "$lib/components/Text.svelte";
  import { dictionary } from "$lib/dictionary";
  const isTranslatable = $derived(
    text && (dictionary as any).Buttons && text in (dictionary as any).Buttons
  );
</script>

{#if primary}
  <div class="button-wrapper" class:lg class:md class:sm>
    <a {href} class="arc-button-primary arc-h4 button-text" class:invert>
      {#if isTranslatable}
        <Text section="Buttons" {text} />
      {:else}
        {text}
      {/if}
    </a>
    <span class="square top-left"></span>
    <span class="square top-right"></span>
    <span class="square bottom-left"></span>
    <span class="square bottom-right"></span>
  </div>
{/if}
{#if secondary}
  <div class="button-wrapper" class:lg class:md class:sm>
    <a {href} class="arc-button-secondary arc-h4" class:invert>
      {#if isTranslatable}
        <Text section="Buttons" {text} />
      {:else}
        {text}
      {/if}
    </a>
  </div>
{/if}

<style>
  .arc-button-primary {
    padding: 0.5rem 0;
  }
  .button-wrapper {
    width: 100%;
  }
  .button-wrapper.lg {
    height: 2.5rem;
  }
  .button-wrapper.md {
    height: 2rem;
  }
  .button-wrapper.sm {
    height: 1.5rem;
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
