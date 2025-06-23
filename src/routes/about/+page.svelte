<script lang="ts">
  import "../../styles.css";
  import "../../tokens.css";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import { getContext, onMount } from "svelte";
  import LandingMidBanner from "$lib/components/LandingMidBanner.svelte";
  import IsoGrid from "$lib/images/iso-grid.svelte";
  import HeroContent from "$lib/components/HeroContent.svelte";
  import PortalDorico from "$lib/images/portal-dorico.svelte";
  import GenericBanner from "$lib/components/GenericBanner.svelte";
  import { GRID } from "$lib/utils/gridData";
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
    currentPage="About"
    buttonOneText="concept"
    buttonOneHref="/concept"
    buttonTwoText="contact"
    buttonTwoHref="/contact"
    HeroImage={PortalDorico}
    isHome={false}
    bgPattern="iso-grid.svg"
    children={() => null}
  />
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
    children={() => null}
  />
  <GenericBanner
    heading="¿Quieres saber más acerca de Blueprint.dev?"
    description="Explora la sección que he preparado para ti, en donde encontrarás más información acerca del proceso de diseño y los retos que he enfrentado durante la ejecución de este proyecto."
    href="/contact"
    text="Contáctame"
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
