<script lang="ts">
  import { getContext } from "svelte";
  let {
    title,
    subheading,
    description,
    buttonOneText,
    buttonOneHref,
    buttonTwoText,
    buttonTwoHref,
    bgPattern = "iso-grid",
    HeroImage = null,
    isHome = false,
  } = $props();
  import IsoCube from "$lib/images/iso-cube.svelte";
  import Button from "$lib/components/Button.svelte";
  import { page } from "$app/state";
  const printPath = page.url.pathname.replace("/", "");
  let WINDOW: { width: number; height: number } = getContext("WINDOW");
  const isMobile = $derived(WINDOW.width < 480);
</script>

<section
  class="hero-main {printPath.length > 1 ? printPath : 'home'}-section"
  style="background: #f9f9f8 url('src/lib/images/{bgPattern}.svg');"
>
  <article class="hero-text section-content">
    <div class="title">
      <h1 class="text-title barlow-extrabold" class:isHome>{title}</h1>
      <h4 class="text-caption caption">{subheading}</h4>
    </div>
    <div class="subheader">
      <p class="text-subheader arc-body-{isMobile ? '2' : '1'}">
        {description}
      </p>
    </div>
  </article>
  <article class="hero-img">
    {#if HeroImage}
      <HeroImage />
    {:else}
      <IsoCube />
    {/if}
  </article>
  <article class="button-container">
    <Button text={buttonOneText} href={buttonOneHref} primary />
    <Button text={buttonTwoText} href={buttonTwoHref} secondary invert />
  </article>
</section>

<style>
  .hero-img {
    max-height: 70vw;
  }
  .hero-main {
    width: 100%;
    min-height: 75svh;
    grid-column: 1 / -1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    grid-template-rows: 1fr 2fr 100px;
    row-gap: 2rem;
  }

  .hero-text {
    border-top: 0;
    border-bottom: 0;
    grid-column: 2 / -2;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    .isHome {
      font-size: clamp(2rem, 4vw, 3.5rem) !important;
    }
  }
  .title {
    h1 {
      padding-bottom: 0.5rem;
    }
    h4 {
      padding-bottom: 1rem;
    }
  }
  .hero-img {
    grid-column: 2 / -2;
    margin: 1rem 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
  .button-container {
    grid-column: 2 / -2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 360px;
  }
  .hero-main {
    min-height: 75svh;
    padding: 2rem 0;
  }
  .text-subheader {
    margin-top: 0.5rem;
    max-width: 60ch;
  }
  @media (min-width: 720px) {
    .hero-text {
      grid-column: 3 / span 3;
      display: flex;
      text-align: left;
      gap: 0rem;
      align-items: flex-start;
    }
    .hero-main {
      grid-template-rows: 3fr 2fr;
      min-height: 65svh !important;
    }

    .hero-img {
      grid-column: 6 / -1;
      grid-row: 1 / 3;
      max-height: 50svh !important;
      height: 100%;
      width: 100%;
    }
    .button-container {
      grid-column: 3 / span 3;
      grid-row: 2 / span 1;
      align-self: flex-start;
      justify-self: flex-start;
      max-width: 20rem;
    }
  }
  @media (min-width: 1024px) {
    .hero-text {
      grid-column: 4 / span 4;
      grid-row: 1 / 2;
    }

    .hero-img {
      grid-column: 9 / span 4;
      max-height: 80%;
    }
    .button-container {
      grid-column: 4 / span 4;
      grid-row: 2 / span 1;
    }
  }
</style>
