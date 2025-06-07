<script lang="ts">
  import { page } from "$app/state";
  import "../styles.css";
  import "../tokens.css";
  import "../styles/text-styles.css";
  import HeroContent from "$lib/components/HeroContent.svelte";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import { getContext, onMount } from "svelte";
  import { GRID } from "$lib/utils/gridData";
  let WINDOW: { width: number; height: number } = getContext("WINDOW");
  let isMobile = $derived(WINDOW.width <= 464);
  let grid = $state(GRID());
  console.log(page);
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
    title="404"
    subheading="Página no encontrada"
    description={`La página ${page.url.pathname} que estás buscando  no existe... por ahora. Intenta volver al inicio o navega por el sitio usando el menú de navegación.`}
    buttonOneText="Volver al inicio"
    buttonOneHref="/"
    buttonTwoText="Contáctame"
    buttonTwoHref="/contact"
  />
  <DividerTrapezoid
    width={WINDOW.width}
    y={isMobile ? 16 : 100}
    w={isMobile ? 16 : grid.getColumnsDistance(1) + grid.gap * 2.5}
    startEnd={1}
    children={() => null}
  />
  <article class="main-content stripped-divider"></article>
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
  @media (min-width: 480px) {
    .main-content {
      grid-column: 3 / -3;
    }
  }
</style>
