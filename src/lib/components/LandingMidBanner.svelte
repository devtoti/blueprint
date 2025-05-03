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
    background: repeating-linear-gradient(
        to left,
        var(--bleu-500),
        var(--bleu-500) 10px,
        transparent 10px,
        transparent 20px
      ),
      linear-gradient(to bottom, var(--bleu-300), var(--bg-blueprint));
    color: var(--white);
    height: 20svh;
    width: 100%;
    width: calc(100% - var(--side-padding-mobile) * 6);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    z-index: 3;
  }
  .mid-banner::after {
    content: "";
    position: absolute;
    top: 25%;
    left: 100%;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
        to left,
        var(--bleu-300),
        var(--bleu-300) 10px,
        transparent 10px,
        transparent 20px
      ),
      linear-gradient(to bottom, var(--bleu-300), var(--bg-blueprint));
    z-index: -1;
    opacity: 0.9;
  }
  .mid-banner::before {
    content: "";
    position: absolute;
    top: 25%;
    left: -100%;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
        to left,
        var(--bleu-300),
        var(--bleu-300) 10px,
        transparent 10px,
        transparent 20px
      ),
      linear-gradient(to bottom, var(--bleu-300), var(--bg-blueprint));
    z-index: -1;
    opacity: 0.9;
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
