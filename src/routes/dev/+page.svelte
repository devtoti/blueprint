<script lang="ts">
  import "../../styles.css";
  import "../../tokens.css";
  import DividerTrapezoid from "$lib/components/DividerTrapezoid.svelte";
  import PaperBox from "$lib/images/paper-box-new.svelte";
  import { getContext, onMount } from "svelte";
  import GenericBanner from "$lib/components/GenericBanner.svelte";
  import { GRID } from "$lib/utils/gridData";
  import PrimaryButton from "$lib/components/PrimaryButton.svelte";
  import Button from "$lib/components/Button.svelte";
  import HeroContent from "$lib/components/HeroContent.svelte";
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
    title="Development"
    subheading="Programación de páginas y aplicaciones web"
    description="Me especializo en traducir diseños de interfaces en código dinámico,funcional y reutilizable. Me apasiona utilizar tecnologías de vanguardia como React, Svelte, TypeScript y Tailwind CSS para facilitar los procesos de desarrollo."
    buttonOneText="Explorar Proyectos"
    buttonOneHref="/projects"
    buttonTwoText="Contáctame"
    buttonTwoHref="/contact"
    HeroImage={PaperBox}
  />
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
