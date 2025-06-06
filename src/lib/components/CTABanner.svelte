<script lang="ts">
  import { onMount } from "svelte";
  import LeftHand from "./LeftHand.svelte";
  import RightHand from "./RightHand.svelte";
  import Button from "./Button.svelte";
  let active = false;
  onMount(() => {
    window.addEventListener("scroll", () => {
      const banner = document.querySelector(".cta-banner");
      if (!banner) return;
      const rect = banner.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      const isNearTop = rect.top <= 240;
      // 60px is the height of the banner
      const isScrollingDown = rect.top < 60;

      if (isInView && isNearTop && !isScrollingDown) {
        active = true;
      } else {
        active = false;
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
</script>

<article class="cta-banner">
  <div class="cta-banner-info">
    <h1 class="arc-h0 cta-text color-invert">Ponte en contacto</h1>
    <p class="arc-body-1 color-invert">
      Si te interesa crear un proyecto conmigo, o si buscas una asesoría
      asesoría personalizada, no dudes en contactarme.
    </p>
    <div class="button-wrapper">
      <Button text="Contáctame" href="/contact" secondary invert />
    </div>
    <div class="button-wrapper">
      <Button text="Explorar Blueprint" href="/about" primary invert />
    </div>
  </div>
  <div class="illustrations-container">
    <div class="left-hand container" class:active role="button" tabindex="0">
      <LeftHand />
    </div>
    <div class="right-hand container" class:active role="button" tabindex="0">
      <RightHand />
    </div>
  </div>
</article>

<style>
  .cta-banner {
    position: relative;
    background: radial-gradient(#adb2de, #aeb2d9 50%, #878cbe 100%);
    height: 80svh;
    grid-column: 1 / -1;
    width: 100%;
    overflow: hidden;
    /* overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      background-color: var(--bleu-200);
      transform: translate(-50%, -50%);
    } */
  }
  .cta-banner-info {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 2rem 1rem;
    text-align: center;
    inset: auto;
    gap: 1rem;
    z-index: 10;
    .cta-text {
      margin-bottom: 0 !important;
      padding-bottom: 0 !important;
    }
  }
  .illustrations-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform-origin: center;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    place-items: center;
    transform: translate(-50%, -20%) scale(1.75) rotate(20deg);
    pointer-events: none;
    mix-blend-mode: multiply;
    z-index: 1;
  }
  .container {
    position: relative;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
  }
  .left-hand,
  .right-hand {
    transition: all 2s ease-in-out;
    opacity: 0.5;
  }
  .left-hand:first-child {
    width: 100%;
    height: fit-content;
    transform: translateX(-20%);
  }
  .right-hand {
    width: 100%;
    height: fit-content;
    transform: translateX(20%);
  }
  .left-hand.active {
    transform: translateX(3%);
    opacity: 1;
  }
  .right-hand.active {
    transform: translateX(0%);
    opacity: 1;
  }
  @media (min-width: 720px) {
    .illustrations-container {
      transform: translate(-45%, -60%) scale(1.2) rotate(10deg) !important;
      align-items: flex-end;
      padding-bottom: 2rem;
    }
    .cta-banner-info {
      justify-content: flex-start;
      margin: 2rem auto 0;
      height: fit-content;
    }
    .cta-banner-info > * {
      display: inline-block;
      width: 50%;
    }
    .button-wrapper {
      max-width: 40ch;
    }
    @media (min-width: 1024px) {
      .illustrations-container {
        transform: translate(-50%, -45%) scale(1) rotate(10deg) !important;
        align-items: flex-end;
        padding-bottom: 2rem;
      }
    }
  }
</style>
