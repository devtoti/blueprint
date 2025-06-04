<script lang="ts">
  import BoxIllustration from "$lib/images/paper-box.svelte";
  import Heading from "$lib/components/Heading.svelte";
  const uxServices = [
    {
      title: "Prototipos",
      description:
        "Hechos a mano a partir de mockups y posteriormente trasladados a alta fidelidad",
    },
    {
      title: "Diseño de Interfaces",
      description:
        "Creación de componentes personalizados apegados a los principios de accesibilidad y usabilidad",
    },
    {
      title: "Ilustraciones",
      description:
        "Realizadas a mano o con herramientas de dibujo vectorial, con separación de capas para ser animadas",
    },
  ];
  const frontendServices = [
    {
      title: "Desarrollo de Aplicaciones",
      description:
        "Traducción de diseño a código, estableciendo primeramente las tecnologías y el sistema de diseño a utilizar",
    },
    {
      title: "Landing Pages",
      description:
        "Enfocadas en la conversión de usuarios y sujetas a A/B testing",
    },
    {
      title: "Integración de APIs",
      description:
        "Integración de APIs para interactuar con el backend y desplegar visualizaciones de datos",
    },
  ];
</script>

{#snippet item(title: string, description: string)}
  <div class="service">
    <h5 class="arc-h5">{title}</h5>
    <p class="arc-body-2">{description}</p>
  </div>
{/snippet}

<Heading
  heading="Servicios Disponibles"
  subheading="Ofrezco una amplia gama de servicios afines al diseño y el desarrollo de aplicaciones web."
  alignRight
/>
<article class="services-container">
  <div class="services-list-left">
    {#each uxServices as UXservice, ix}
      {@render item(UXservice.title, UXservice.description)}
    {/each}
  </div>
  <div class="services-list-right">
    {#each frontendServices as FrontendService, ix}
      {@render item(FrontendService.title, FrontendService.description)}
    {/each}
  </div>
  <div class="services-illustration-1">
    <BoxIllustration />
  </div>
  <div class="services-illustration-2">
    <BoxIllustration />
  </div>
  <div class="services-list-right">
    {#each frontendServices as FrontendService, ix}
      {@render item(FrontendService.title, FrontendService.description)}
    {/each}
  </div>
</article>

<style>
  .services-container {
    width: 100%;
    grid-column: 1 / -1;
    background-color: var(--bg-primary);
    gap: 1rem;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(6, 1fr);
    row-gap: 2rem;
  }
  .service {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    &:hover {
      background-color: var(--bg-tertiary);
    }
  }
  [class*="services-list"] {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .services-list-left {
    grid-column: 1 / span 3;
    grid-row: 1 / 2;
  }
  .services-list-right {
    grid-column: span 3 / -1;
    grid-row: 2 / 3;
    align-self: start;
  }
  [class*="services-illustration"] {
    align-self: center;
  }
  .services-illustration-1 {
    grid-column: span 3 / -1;
    grid-row: 1 / 2;
  }
  .services-illustration-2 {
    grid-column: 1 / span 3;
    grid-row: 2 / 3;
    transform: scaleX(-1);
  }
  @media (min-width: 480px) {
    .services-list-left {
      grid-column: 1 / span 3;
    }
    .services-list-right {
      grid-column: span 3 / -1;
      grid-row: 2 / 3;
    }
    .services-illustration-1 {
      grid-column: span 3 / -1;
      align-self: start;
    }
    .services-illustration-2 {
      grid-column: 1 / span 3;
      align-self: start;
      grid-row: 2 / 3;
    }
  }
  @media (min-width: 720px) {
    .services-illustration-1 {
      grid-column: span 3 / -1;
      padding-right: 1rem;
      grid-row: 1 / 2;
    }
    .services-list-right,
    .services-list-left {
      height: 100%;
      justify-content: space-evenly;
    }
    .services-illustration-2 {
      grid-column: 1 / span 3;
      padding-right: 1rem;
      grid-row: 2 / 3;
    }
  }
  @media (min-width: 1024px) {
    .services-container {
      grid-column: 2 / -2;
    }
  }
</style>
