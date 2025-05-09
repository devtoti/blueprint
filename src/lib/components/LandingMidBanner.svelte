<script lang="ts">
  let { offset = 0 } = $props();
</script>

<article style={`--offset: ${offset}px`} class="mid-banner stripped-divider">
  <span>
    <h2 class="arc-h2 color-invert">Ponte en contacto conmigo</h2>
    <p class="arc-body-1 color-invert">
      Estoy aquí para ayudarte a crear soluciones web excepcionales.
    </p>
  </span>
  <span class="button-container">
    <div class="button-wrapper">
      <a href="/contact" class="arc-button-secondary arc-h3 invert"
        >Envíame un mensaje</a
      >
    </div>
    <div class="button-wrapper">
      <a href="/about" class="arc-button-primary arc-h3 invert"
        >Acerca de Blueprint</a
      >
      <span class="square top-left"></span>
      <span class="square top-right"></span>
      <span class="square bottom-left"></span>
      <span class="square bottom-right"></span>
    </div>
  </span>
</article>

<style>
  [class*="arc-button"] {
    background-color: var(--white);
  }
  .arc-button-primary {
    background-color: var(--white);
    color: var(--text-primary);
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.25) rotate(45)'><rect x='0' y='0' width='100%' height='100%' fill='%232b2b3100'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='%233b82f6cc'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  }
  .arc-button-secondary {
    background-color: transparent;
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(0.6) rotate(0)'><rect x='0' y='0' width='200%' height='100%' fill='%232b2b3100'/><path d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002'  stroke-width='1' stroke='%23ffffffff' fill='none'/></pattern></defs><rect width='800%' height='400%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
    color: var(--white);
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
  .button-wrapper {
    position: relative;
    height: 40px;
  }
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .square {
    position: absolute;
    height: 8px;
    width: 8px;
    border: 1px solid var(--border-primary);
    background-color: var(--white);
  }

  .square.top-right {
    top: -4px;
    right: -4px;
    transition: all 0.6s ease-in-out;
  }
  .square.top-left {
    top: -4px;
    left: -4px;
    transition: all 0.6s ease-in-out;
  }
  .square.bottom-left {
    bottom: -4px;
    left: -4px;
    transition: all 0.6s ease-in-out;
  }
  .square.bottom-right {
    bottom: -4px;
    right: -4px;
    transition: all 0.6s ease-in-out;
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
    color: var(--white);
    height: 25svh;
    width: 100%;
    width: calc(100% - var(--side-padding-mobile) * 6);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  span {
    z-index: 3;
  }
  .mid-banner::after {
    content: "";
    position: absolute;
    top: 25%;
    left: 0;
    width: 100svw;
    height: 100%;
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
  .mid-banner::before {
    content: "";
    position: absolute;
    top: 25%;
    left: -100%;
    width: 100%;
    height: 100%;
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

  @media (min-width: 480px) {
    .mid-banner {
      grid-column: 1 / -1;
      width: 100%;
    }
  }
  @media (min-width: 1029px) {
    .mid-banner {
      grid-column: 3 / -3 !important;
      width: calc(100% - var(--offset) * 2);
      width: 100%;
      width: calc(100% - 100px * 2);
    }
  }
</style>
