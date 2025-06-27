<script lang="ts">
  let { offset = 0, winWidth = 360 } = $props();
  let innerWidth = $state(0);
  let clientHeight = $state(0);
  import Button from "$lib/components/Button.svelte";
  import { lang } from "$lib/stores";
  import Text from "$lib/components/Text.svelte";
  import { dictionary } from "$lib/dictionary";
  const lan = $derived($lang as "en" | "es");
</script>

<svelte:window bind:innerWidth />
<section class="mid-banner-wrapper">
  <article
    bind:clientHeight
    class="mid-banner stripped-divider"
    style={`--innerWidth: ${innerWidth}px; --offset: ${offset}px`}
  >
    <span>
      <h3
        class={winWidth <= 360
          ? "arc-h1 title color-invert"
          : "arc-h2 title color-invert"}
      >
        <Text section="mid-banner" text="title" />
      </h3>
      <p class="arc-body-0 color-invert">
        <Text section="mid-banner" text="description" />
      </p>
    </span>
    <span class="button-container">
      <Button
        href="/about"
        text={dictionary["mid-banner"].primaryButton[lan]}
        secondary
        invert
      />
      <Button
        href="/contact"
        text={dictionary["mid-banner"].secondaryButton[lan]}
        primary
        invert
      />
    </span>
  </article>
  <div class="mid-banner-background" style="height: {clientHeight}px"></div>
</section>

<style>
  .mid-banner-wrapper {
    grid-column: 1 / -1;
    width: 100%;
  }
  .mid-banner {
    position: relative;
    grid-column: 2 / -2;
    background: repeating-linear-gradient(
        to left,
        var(--white-alpha-05),
        var(--white-alpha-05) 10px,
        transparent 10px,
        transparent 20px
      ),
      linear-gradient(to bottom, var(--bg-blueprint), var(--bleu-600));
    color: var(--text-light);
    min-height: 35svh;
    width: 100%;
    height: 100%;
    width: calc(100% - var(--side-padding-mobile) * 6);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
  }
  span {
    z-index: 3;
    max-width: 70ch;
  }
  .title {
    margin-bottom: 0.5rem;
  }
  .mid-banner-background {
    width: 100svw;
    height: 100%;
    position: absolute;
    transform: translateY(15%);
    grid-column: 2 / -2;
    background: repeating-linear-gradient(
        to left,
        var(--bleu-400),
        var(--bleu-400) 10px,
        transparent 10px,
        transparent 20px
      ),
      linear-gradient(to bottom, var(--bg-blueprint), var(--bleu-400));
    z-index: -1;
    opacity: 0.9;
  }

  @media (min-width: 480px) and (max-width: 1028px) {
    .mid-banner {
      grid-column: 1 / -1;
      width: 100%;
    }
    .button-container {
      flex-direction: row-reverse;
    }
    .mid-banner-background {
      display: none;
    }
  }
  @media (min-width: 1029px) {
    .mid-banner {
      grid-column: 3 / -3 !important;
      width: calc(100% - var(--offset) * 2);
      width: 100%;
      width: calc(100% - 100px * 2);
    }
    .mid-banner-background {
      display: block;
      transform: translateY(20%);
    }
    .button-container {
      flex-direction: row-reverse;
    }
  }
  :global([data-theme="dark"]) {
    .mid-banner-background {
      background: repeating-linear-gradient(
          to left,
          var(--bleu-100),
          var(--bleu-100) 10px,
          transparent 10px,
          transparent 20px
        ),
        linear-gradient(to bottom, var(--bg-blueprint), var(--bleu-100));
    }
    .mid-banner {
      background: repeating-linear-gradient(
          to left,
          var(--bleu-50),
          var(--bleu-50) 10px,
          transparent 10px,
          transparent 20px
        ),
        linear-gradient(to bottom, var(--bg-blueprint), var(--bleu-100));
    }
  }
</style>
