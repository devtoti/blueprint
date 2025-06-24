<script lang="ts">
  import "../../styles.css";
  import "../../tokens.css";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import { getContext, onMount } from "svelte";
  import GenericBanner from "$lib/components/GenericBanner.svelte";
  import { GRID } from "$lib/utils/gridData";
  import HeroContent from "$lib/components/HeroContent.svelte";
  import IsoCube from "$lib/images/iso-cube.svelte";
  import IsoCubeDark from "$lib/images/iso-cube-dark.svelte";
  import { theme } from "$lib/stores";
  let isDarkMode = $derived($theme === "dark");
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
    currentPage="Concept"
    isHome={false}
    bgPattern="iso-grid.svg"
    buttonOneText="development"
    buttonOneHref="/#projects"
    buttonTwoText="design"
    buttonTwoHref="/#services"
    HeroImage={isDarkMode ? IsoCubeDark : IsoCube}
    children={() => null}
  />
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
    children={() => null}
  />
  <GenericBanner href="/contact" buttonText="contact" />
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
    invert
    children={() => null}
  />
</main>
