<script lang="ts">
  let { offset = 0 } = $props();
</script>

<article style={`--offset: ${offset}px`} class="mid-banner stripped-divider">
  <span>
    <h2>mid banner</h2>
  </span>
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
    height: 10svh;
    width: calc(100% - var(--side-padding-mobile) * 6);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    z-index: 3;
  }
  .mid-banner::before {
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
    opacity: 0.2;
    transform: rotate(180deg);
  }
  @media (min-width: 480px) {
    .mid-banner {
      grid-column: 3 / -3;
      width: calc(100% - var(--offset) * 2);
      width: 100%;
      width: calc(100% - 100px * 2);
    }
  }
  @media (min-width: 1029px) {
    .mid-banner {
    }
  }
</style>
