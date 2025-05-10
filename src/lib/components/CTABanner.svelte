<script lang="ts">
  import { onMount } from "svelte";
  import LeftHand from "./LeftHand.svelte";
  import RightHand from "./RightHand.svelte";
  let active = false;
  onMount(() => {
    window.addEventListener("scroll", () => {
      const banner = document.querySelector(".cta-banner");
      if (!banner) return;
      const rect = banner.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      const isNearTop = rect.top <= 24240;
      const isScrollingDown = rect.top < 60;
      // 60px is the height of the banner

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
    background-color: #adb2de;
    height: 70svh;
    grid-column: 1 / -1;
    width: 100%;
    overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      background-color: var(--bleu-200);
      transform: translate(-50%, -50%);
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
    transform: translate(-50%, -50%) scale(2) rotate(60deg);
  }
  .container {
    position: relative;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
  }
  .left-hand,
  .right-hand {
    transition: all 2s ease-in-out;
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
    transform: translateX(0%);
  }
  .right-hand.active {
    transform: translateX(0%);
  }
  @media (min-width: 720px) {
    .illustrations-container {
      transform: translate(-50%, -50%) scale(1) rotate(10deg) !important;
    }
  }
</style>
