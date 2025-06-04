<script lang="ts">
  let { offset = 0, winWidth = 360 } = $props();
  let innerWidth = $state(0);
  let clientHeight = $state(0);
  import Button from "$lib/components/Button.svelte";
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
          ? "arc-h4 title color-invert"
          : "arc-h3 title color-invert"}
      >
        Añade Blueprint a tu proyecto
      </h3>
      <p class="arc-body-1 color-invert">
        ¿Te interesaría implementar la filosofía de diseño de Blueprint.dev en
        tu proyecto, o simplemente te gustaría contar con alguna opinión
        técnica-proyectual?
      </p>
    </span>
    <span class="button-container">
      <Button href="/about" text="Leer más" secondary invert />
      <Button href="/contact" text="Contactar" primary invert />
    </span>
  </article>
  <div class="mid-banner-background" style="height: {clientHeight}px"></div>
  <!-- </span>
  </article>
  <div class="mid-banner-background" style="height: {clientHeight}px"></div> -->
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
    color: var(--white);
    min-height: 25svh;
    width: 100%;
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
    .button-wrapper {
      height: 40px;
    }
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
</style>
