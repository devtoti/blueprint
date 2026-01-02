<script lang="ts">
  import type { Component } from "svelte";

  let {
    text,
    href = "/",
    primary = false,
    secondary = false,
    tertiary = false,
    invert = false,
    lg = false,
    md = false,
    sm = false,
    Icon = undefined as Component | undefined,
    external = false,
  } = $props();
  import Text from "$lib/components/Text.svelte";
  import { dictionary } from "$lib/dictionary";
  const isTranslatable = $derived(
    text && (dictionary as any).Buttons && text in (dictionary as any).Buttons
  );
</script>

{#if primary}
  <div class="button-wrapper primary" class:lg class:md class:sm>
    <a
      {href}
      class="arc-button-primary arc-h4 button-text"
      class:invert
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {#if isTranslatable}
        <Text section="Buttons" {text} />
      {:else}
        {text}
      {/if}
      {#if Icon}
        <Icon />
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
    <a
      {href}
      class="arc-button-secondary arc-h4"
      class:invert
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {#if isTranslatable}
        <Text section="Buttons" {text} />
      {:else}
        {text}
      {/if}
      {#if Icon}
        <Icon />
      {/if}
    </a>
  </div>
{/if}
{#if tertiary}
  <div class="button-wrapper tertiary" class:lg class:md class:sm>
    <a
      {href}
      class="arc-button-tertiary arc-h4"
      class:invert
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {#if isTranslatable}
        <Text section="Buttons" {text} />
      {:else}
        {text}
      {/if}
      {#if Icon}
        <Icon />
      {/if}
    </a>
  </div>
{/if}

<style>
  /* Base styles for all buttons */
  .button-wrapper {
    width: 100%;
    position: relative;
    height: 32px;
  }
  .arc-h4 {
    font-weight: 600;
    padding: 0.25rem 0 !important;
  }
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-primary);
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem;
  }

  /* Size modifiers */
  .button-wrapper.lg {
    height: 2.5rem;
  }
  .button-wrapper.md {
    height: 2rem;
  }
  .button-wrapper.sm {
    height: 1.5rem;
  }
  @media (min-width: 480px) {
    .button-wrapper {
      height: 2.5rem;
    }
  }

  /* Primary Button */
  .arc-button-primary {
    background-color: var(--bg-blueprint);
    color: var(--white);
    border: 2px solid var(--blue-radix-1000);
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.25) rotate(45)'><rect x='0' y='0' width='100%' height='100%' fill='%232b2b3100'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='%23ffffff33'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
    padding: 0.5rem 0;
  }
  .arc-button-primary:hover {
    outline: 1.5px solid var(--border-primary);
    background-color: var(--white);
    color: var(--text-primary);
  }
  :global([data-theme="dark"] .arc-button-primary:hover) {
    outline: 1.5px solid var(--border-tertiary);
    background-color: var(--white);
    color: var(--text-primary);
  }
  .arc-button-primary.invert {
    background-color: var(--white);
    color: var(--text-primary);
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.25) rotate(45)'><rect x='0' y='0' width='100%' height='100%' fill='%232b2b3100'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='%233b82f640'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  }
  .arc-button-primary.invert:hover {
    outline: 1.5px solid var(--border-primary);
    background-color: var(--bleu-600);
    color: var(--white);
  }

  /* Primary dark theme */
  :global([data-theme="dark"] .arc-button-primary) {
    background-color: var(--bg-blueprint);
    color: var(--white);
    border: 2px solid var(--blue-radix-800);
  }
  :global([data-theme="dark"] .arc-button-primary:hover) {
    outline: 1.5px solid var(--border-tertiary);
    background-color: var(--white);
    color: var(--text-primary);
  }
  :global([data-theme="dark"] .arc-button-primary.invert) {
    background-color: var(--white);
    color: var(--text-tertiary);
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.25) rotate(45)'><rect x='0' y='0' width='100%' height='100%' fill='%232b2b3100'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='%233b82f640'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  }
  :global([data-theme="dark"] .arc-button-primary.invert:hover) {
    outline: 1.5px solid var(--border-primary);
    background-color: var(--bleu-600);
    color: var(--white);
  }

  /* Secondary Button */
  .arc-button-secondary {
    background-color: var(--bg-blueprint);
    color: var(--white);
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(0.6) rotate(0)'><rect x='0' y='0' width='200%' height='100%' fill='%232b2b3100'/><path d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002'  stroke-width='1' stroke='%2385A3E0' fill='none'/></pattern></defs><rect width='800%' height='400%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  }
  .arc-button-secondary:hover {
    outline: 1.5px solid var(--border-primary);
    background-color: var(--white);
    color: var(--text-primary);
  }
  .arc-button-secondary.invert {
    background-color: var(--bleu-100);
    color: var(--text-primary);
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(0.6) rotate(0)'><rect x='0' y='0' width='200%' height='100%' fill='%232b2b3100'/><path d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002'  stroke-width='1' stroke='%23173e8830' fill='none'/></pattern></defs><rect width='800%' height='400%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  }

  /* Secondary dark theme */
  :global([data-theme="dark"] .arc-button-secondary.invert) {
    background-color: var(--bleu-50);
    color: var(--text-primary);
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(0.6) rotate(0)'><rect x='0' y='0' width='200%' height='100%' fill='%232b2b3100'/><path d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002'  stroke-width='1' stroke='%23ffffff33' fill='none'/></pattern></defs><rect width='800%' height='400%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  }
  :global([data-theme="dark"] .arc-button-secondary.invert:hover) {
    background-color: var(--bleu-50);
    color: var(--white);
  }

  /* Tertiary Button */
  .arc-button-tertiary {
    background-color: transparent;
    border: 1px solid var(--border-primary);
    color: var(--text-primary);
    border-radius: 0.25rem;
    font-size: 14px;
  }
  .arc-button-tertiary:hover,
  .arc-button-tertiary:active {
    background-color: transparent;
    border: 1px solid var(--border-primary);
    color: var(--text-primary);
  }
  .arc-button-tertiary.invert {
    background-color: var(--white);
    border: 1px solid var(--border-primary);
    color: var(--text-primary);
    border-radius: 0.25rem;
  }
  .arc-button-tertiary.invert:hover {
    background-color: transparent;
    border: 1px solid var(--border-primary);
    color: var(--text-primary);
    border-radius: 0.25rem;
  }

  /* Button container utility */
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
</style>
