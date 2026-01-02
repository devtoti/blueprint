<script lang="ts">
  import { onMount } from "svelte";
  import BlueprintArchs from "../images/archui-archs.svelte";
  import Button from "./Button.svelte";
  import Text from "./Text.svelte";
  import { dictionary } from "$lib/dictionary";
  import { lang } from "$lib/stores";
  import { theme } from "$lib/stores";
  const isDarkMode = $derived($theme === "dark");
  const lan = $derived($lang as "en" | "es");

  onMount(() => {
    const blueprintArchs = document.querySelector(
      ".cta-banner .blueprint-archs-container"
    ) as HTMLElement;
    if (!blueprintArchs) return;

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
          blueprintArchs.style.transition = transition;

          const scale = 1.5 + 0.75 * ratio;
          blueprintArchs.style.transform = `scale(${scale})`;

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
    <div class="blueprint-archs-container">
      <BlueprintArchs isDark={isDarkMode} />
    </div>
  </div>
</article>

<style>
  .cta-banner {
    position: relative;
    /* Use the same radial gradient as in CTABanner.svelte */
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
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    mix-blend-mode: multiply;
    z-index: 1;
  }
  .blueprint-archs-container {
    position: relative;
    width: fit-content;
    height: fit-content;
    opacity: 0.5;
    transform-origin: center;
    object-position: center;
  }
  .blueprint-archs-container :global(svg) {
    object-position: center;
  }
  @media (min-width: 460px) {
    .cta-banner {
      grid-column: 3 / -3;
    }
  }
  @media (min-width: 720px) {
    .illustrations-container {
      transform: translate(-50%, -50%);
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
        transform: translate(-50%, -50%);
      }
    }
  }
  :global([data-theme="dark"]) {
    .cta-banner {
      /* Use the CTABanner dark theme gradient */
      background: radial-gradient(#7b81a8, #3a4d8e 50%, #161d4a 100%);
    }
    .illustrations-container {
      mix-blend-mode: screen;
    }
  }
</style>
