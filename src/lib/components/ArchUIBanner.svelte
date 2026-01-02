<script lang="ts">
  import { onMount } from "svelte";
  import LeftHand from "./LeftHand.svelte";
  import RightHand from "./RightHand.svelte";
  import Button from "./Button.svelte";
  import Text from "./Text.svelte";
  import { dictionary } from "$lib/dictionary";
  import { lang } from "$lib/stores";
  import { theme } from "$lib/stores";
  const isDarkMode = $derived($theme === "dark");
  const lan = $derived($lang as "en" | "es");
  let active = $state(false);

  onMount(() => {
    const rightHand = document.querySelector(
      ".cta-banner .right-hand"
    ) as HTMLElement;
    const leftHand = document.querySelector(
      ".cta-banner .left-hand"
    ) as HTMLElement;
    if (!rightHand || !leftHand) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const banner = document.querySelector(".cta-banner") as HTMLElement;
          if (!banner) return;

          const rect = banner.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const elementCenter = rect.top + rect.height / 2;
          const distanceFromCenter = Math.abs(
            viewportHeight / 2 - elementCenter
          );
          const maxDistance = viewportHeight / 2;

          const ratio = Math.max(0, 1 - distanceFromCenter / maxDistance);
          const transition = "transform 0.5s ease-out";
          rightHand.style.transition = transition;
          leftHand.style.transition = transition;
          const rightPosition = 25 - 25 * ratio;
          const leftPosition = -25 + 28 * ratio;

          rightHand.style.transform = `translateX(${rightPosition}%)`;
          leftHand.style.transform = `translateX(${leftPosition}%)`;

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<article class="cta-banner">
  <div class="cta-banner-info">
    <h2 class="arc-h0 cta-text color-invert">
      <Text section="archui-banner" text="title" />
    </h2>
    <h3 class="arc-body-0 color-invert">
      <Text section="archui-banner" text="description" />
    </h3>
    <div class="button-wrapper">
      <Button
        text={dictionary["archui-banner"].primaryButton[lan]}
        href="https://archui-website.netlify.app"
        external
        primary
        invert
      />
    </div>
    <div class="button-wrapper">
      <Button
        text={dictionary["archui-banner"].secondaryButton[lan]}
        href="https://www.figma.com/community/file/1585101937198168427"
        secondary
        external
        invert
      />
    </div>
  </div>
  <div class="illustrations-container">
    <div class="left-hand container" class:active>
      <LeftHand isDark={isDarkMode} />
    </div>
    <div class="right-hand container" class:active>
      <RightHand isDark={isDarkMode} />
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
    border: 1.5px solid var(--border-secondary);
    border-left: none;
    border-right: none;
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
    h3 {
      padding-bottom: 0.5rem;
    }
  }
  .button-wrapper {
    width: 100%;
    max-width: 12rem;
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
  @media (min-width: 460px) {
    .cta-banner {
      grid-column: 3 / -3;
    }
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
  :global([data-theme="dark"]) {
    .cta-banner {
      background: radial-gradient(#7b81a8, #3a4d8e 50%, #161d4a 100%);
    }
    .illustrations-container {
      mix-blend-mode: screen;
    }
  }
</style>
