<script lang="ts">
  let { offset = 0, heading, description, href, text } = $props();
  import Button from "$lib/components/Button.svelte";
</script>

<article style={`--offset: ${offset}px`} class="mid-banner stripped-divider">
  <h2 class="arc-h2 color-invert">{heading}</h2>
  <p class="arc-body-1 color-invert">{description}</p>
  <Button {href} {text} />
</article>

<style>
  .mid-banner {
    position: relative;
    grid-column: 2 / -2;
    background: linear-gradient(
      to bottom,
      var(--bleu-300),
      var(--bg-blueprint)
    );
    color: var(--white);
    height: 25svh;
    width: calc(100% - var(--side-padding-mobile) * 6);
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    justify-content: center;
  }
  .mid-banner::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      to left,
      var(--bleu-600),
      var(--bleu-600) 10px,
      transparent 10px,
      transparent 20px
    );
    z-index: 2;
    pointer-events: none;
    opacity: 0.2;
    transform: rotate(180deg);
  }
  @media (min-width: 480px) {
    .mid-banner {
      grid-column: 3 / -3;
      width: calc(100% - var(--offset) * 2);
      width: calc(100% - 100px * 2);
      width: 100%;
    }
  }
  @media (min-width: 1029px) {
    .mid-banner {
    }
  }
</style>
