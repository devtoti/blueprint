<script lang="ts">
  import { onMount, getContext } from "svelte";
  import { dictionary } from "$lib/dictionary";
  let {
    buttonOneText = null,
    buttonOneHref = null,
    buttonTwoText = null,
    buttonTwoHref = null,
    currentPage = "Home",
    children,
    bgPattern = "iso-grid.svg",
    HeroImage = null,
    isHome = false,
  }: {
    currentPage: keyof typeof dictionary;
    buttonOneText: string | null;
    buttonOneHref: string | null;
    buttonTwoText: string | null;
    buttonTwoHref: string | null;
    children: any;
    bgPattern: string;
    HeroImage: any;
    isHome: boolean;
  } = $props();
  import IsoCube from "$lib/images/iso-cube.svelte";
  import Button from "$lib/components/Button.svelte";
  import Text from "$lib/components/Text.svelte";
  import { page } from "$app/stores";
  const printPath = $page.url.pathname.replace("/", "");
</script>

<section
  class="hero-main {printPath.length > 1 ? printPath : 'home'}-section"
  style="background-image: url('./images/{bgPattern}');background-size: cover;background-position: center;background-repeat: repeat;"
>
  <article class="hero-text section-content">
    <div class="title">
      <h1 class="text-title barlow-extrabold arc-h1" class:isHome>
        <Text section={currentPage} text="heading" />
      </h1>
      <h4 class="text-caption caption">
        <Text section={currentPage} text="description" />
      </h4>
    </div>
    <div class="subheader">
      <p class="text-subheader arc-body-1">
        <Text section={currentPage} text="subheading" />
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
    {#if buttonOneText && buttonOneHref}
      <Button text={buttonOneText} href={buttonOneHref} primary />
    {/if}
    {#if buttonTwoText && buttonTwoHref}
      <Button text={buttonTwoText} href={buttonTwoHref} secondary invert />
    {/if}
  </article>
  {#if children}
    {@render children()}
  {/if}
</section>

<style>
  .hero-img {
    max-height: 400px;
  }
  .hero-main {
    background-color: var(--bg-secondary);
    width: 100%;
    min-height: 75svh;
    grid-column: 1 / -1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    grid-template-rows: 0.5fr 2fr 100px;
    row-gap: 1rem;
    position: relative;
  }
  .section-content,
  .hero-img,
  .button-container {
    position: relative;
    z-index: 1;
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
      font-size: clamp(2.5rem, 4vw, 4rem) !important;
      padding-bottom: 0;
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

    .title {
      h1 {
        margin-bottom: -4px;
      }
      h4 {
        padding-bottom: 1rem;
      }
    }
    .hero-img {
      grid-column: 8 / span 6;
      /* max-height: 80%; */
    }
    .button-container {
      grid-column: 4 / span 4;
      flex-direction: row;
      max-width: 100%;
      grid-row: 2 / span 1;
    }
    .hero-BgPattern {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      z-index: 0;
      pointer-events: none;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  :global([data-theme="dark"]) {
    .hero-main {
      background-color: var(--bg-darksand);
    }
  }
</style>
