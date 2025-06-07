<script lang="ts">
  import "../../styles.css";
  import "../../tokens.css";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import RadialDeco from "$lib/images/radial-deco.svelte";
  import PortalDorico from "$lib/images/portal-dorico.svelte";
  import HeroContent from "$lib/components/HeroContent.svelte";
  import BrokenPaperPattern from "$lib/images/broken-paper-pattern.svg";
  import PaperBox from "$lib/images/paper-box.svelte";
  import Button from "$lib/components/Button.svelte";
  import { getContext, onMount } from "svelte";
  import GenericBanner from "$lib/components/GenericBanner.svelte";
  import { GRID } from "$lib/utils/gridData";
  import CalendlyWidget from "$lib/components/CalendlyWidget.svelte";

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
  <HeroContent
    title="Contacto"
    subheading="Agenda una llamada / escríbeme"
    description="Actualmente me encuentro trabajando tiempo completo como designer y frontend developer, por lo que de momento mi disponibilidad es limitada. Si tienes alguna solicitud particular, por favor, ¡no dudes en contactarme!"
    buttonOneText="Ver Diseños"
    buttonOneHref="/projects"
    buttonTwoText="Contáctame"
    buttonTwoHref="/contact"
    bgPattern="broken-paper-pattern"
    HeroImage={PortalDorico}
  >
    <CalendlyWidget />
  </HeroContent>
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
  >
    <div class="radial-deco-wrapper">
      <RadialDeco />
    </div>
  </DividerTrapezoid>
  <GenericBanner
    heading="¿Quieres saber más acerca de Blueprint.dev?"
    description="Explora la sección que he preparado para ti, en donde encontrarás más información acerca del proceso de diseño y los retos que he enfrentado durante la ejecución de este proyecto."
    href="/about"
    text="Explorar Blueprint"
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
  .calendly-inline-widget {
    grid-column: 4 / span 8;
    width: 100%;
    &:first-child {
      max-width: 100% !important;
    }
  }
  .hero-img {
    height: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .hero-img-2 {
    display: none;
  }
  .hero-main {
    width: 100%;
    min-height: 75svh;
    grid-column: 1 / -1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    grid-template-rows: 0.5fr 60px auto;
    row-gap: 1rem;
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
    grid-row: 2 / span 1;
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
  @media (min-width: 480px) {
    .hero-img {
      grid-column: 3 / -3;
    }
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
      grid-template-rows: 0.5fr 40px 2fr;
      min-height: 65svh !important;
    }
    .hero-img-2 {
      display: block;
      width: 100%;
      height: 100%;
      grid-column: span 3 / -3;
      grid-row: 1 / 3;
    }

    .hero-img {
      grid-column: 3 / -3;
      grid-row: 3 / 4;
      /* max-height: 50svh !important; */
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
    .calendly-inline-widget {
      height: 1000px !important;
    }
    .button-container {
      grid-column: 4 / span 4;
      grid-row: 2 / span 1;
    }
    .hero-img-2 {
      grid-column: span 3 / -4;
    }
  }
</style>
