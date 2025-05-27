<script lang="ts">
  import "../../styles.css";
  import "../../tokens.css";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import { getContext, onMount } from "svelte";
  import GenericBanner from "$lib/components/GenericBanner.svelte";
  import { GRID } from "$lib/utils/gridData";
  import PrimaryButton from "$lib/components/PrimaryButton.svelte";
  import PaperBox from "$lib/images/paper-box.svelte";
  import Button from "$lib/components/Button.svelte";
  let WINDOW: { width: number; height: number } = getContext("WINDOW");
  let isMobile = $derived(WINDOW.width <= 464);
  let grid = $state(GRID());

  onMount(() => {
    grid = GRID();
    window.addEventListener("resize", () => {
      grid = GRID();
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  });
</script>

<main>
  <section class="contact-page grainy hero-section">
    <article class="section-content hero-content">
      <div class="title">
        <h1 class="text-title barlow-extrabold">Frontend Development</h1>
        <h4 class="text-caption caption">
          Traducción de UI a código dinámico y funcional
        </h4>
      </div>
      <div class="subheader">
        <p class="text-subheader">
          Transformo diseños de interfaces en código dinámico y funcional,
          utilizando tecnologías como React, TypeScript, Svelte y Tailwind CSS.
        </p>
      </div>
    </article>
    <article class="hero-img">
      <PaperBox />
    </article>
    <article class="button-container">
      <PrimaryButton text="Leer Más" href="/about" />
      <Button text="Explorar proyectos" href="/about" />
    </article>
  </section>
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
    children={() => null}
  />
  <GenericBanner
    heading="Desarrollo de interfaces"
    description="Desarrollo de interfaces de usuario dinámicas y funcionales"
    href="/about"
    text="Leer más"
  />
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
    invert
    children={() => null}
  />
</main>

<style>
  main {
    background-color: var(--bg-primary);
    background-image: url("src/lib/images/iso-grid.svg");
    background-size: cover;
    background-position: center;
  }
  .hero-img {
    max-height: 25rem;
  }
  section {
    border-top: 0;
    border-bottom: 0;
    grid-column: 2 / -2;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    &:last-child {
      border-bottom: 0;
      outline: 1px solid red !important;
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
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .contact-page {
    height: 75svh;
  }
  .text-subheader {
    margin-top: 0.5rem;
    max-width: 60ch;
  }
  @media (min-width: 464px) {
    .hero-section {
      grid-column: 3 / -3;
      display: grid;
      grid-template-columns: 1fr 1fr;
      .hero-content {
        grid-column: 1 / span 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: start;
        justify-content: center;
      }
      .hero-img {
        grid-column: 2 / span 1;
      }
    }
  }
</style>
