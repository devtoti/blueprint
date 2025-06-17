<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  const imageContext = import.meta.glob("$lib/images/*.png", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>;
  const uxServices = $state([
    {
      title: "Prototipos",
      active: true,
      img: "ui-designs.png",
      description:
        "Hechos a mano a partir de mockups y posteriormente trasladados a alta fidelidad",
    },
    {
      title: "Diseño de Interfaces",
      active: false,
      img: "interfaces.png",
      description:
        "Creación de componentes personalizados apegados a los principios de accesibilidad y usabilidad",
    },
    {
      title: "Ilustraciones",
      active: false,
      img: "illustrations.png",
      description:
        "Realizadas a mano o con herramientas de dibujo vectorial, con separación de capas para ser animadas",
    },
  ]);
  const frontendServices = $state([
    {
      title: "Desarrollo de Aplicaciones",
      active: true,
      img: "app-development.png",
      description:
        "Traducción de diseño a código, estableciendo primeramente las tecnologías y el sistema de diseño a utilizar",
    },
    {
      title: "Landing Pages",
      active: false,
      img: "landing-pages.png",
      description:
        "Enfocadas en la conversión de usuarios y sujetas a A/B testing",
    },
    {
      title: "Integración de APIs",
      active: false,
      img: "api-integration.png",
      description:
        "Integración de APIs para interactuar con el backend y desplegar visualizaciones de datos",
    },
  ]);
  function handleHover(array: any[], item: any) {
    array.forEach((service) => {
      if (service.title === item.title) {
        service.active = true;
      } else {
        service.active = false;
      }
    });
  }
  let highlightedServiceDesign = $derived(
    uxServices.find((service) => service.active)?.img
  );
  let highlightedServiceDevelopment = $derived(
    frontendServices.find((service) => service.active)?.img
  );
</script>

{#snippet item(array: any[], item: any)}
  <button
    class="service"
    class:active={item.active}
    onmouseenter={() => handleHover(array, item)}
  >
    <h5 class="arc-h4">{item.title}</h5>
    <p class="arc-body-1">{item.description}</p>
  </button>
{/snippet}

<Heading
  heading="Servicios Disponibles"
  subheading="Ofrezco una amplia gama de servicios afines al diseño y el desarrollo de aplicaciones web."
  alignRight
/>
<article class="services-container">
  <div class="services-list-left">
    {#each uxServices as UXservice, ix}
      {@render item(uxServices, UXservice)}
    {/each}
  </div>
  <div class="services-list-right">
    {#each frontendServices as feService, ix}
      {@render item(frontendServices, feService)}
    {/each}
  </div>
  <div class="services-illustration-1 design">
    <img
      src={imageContext[`/src/lib/images/${highlightedServiceDesign}`]}
      alt="Design"
    />
  </div>
  <div class="services-illustration-2 development">
    <img
      src={imageContext[`/src/lib/images/${highlightedServiceDevelopment}`]}
      alt="Development"
    />
  </div>
</article>

<style>
  .services-container {
    width: 100%;
    grid-column: 1 / -1;
    background-color: var(--bg-primary);
    gap: 1rem;
    display: grid;
    grid-template-rows: 20rem auto 20rem auto;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 1rem;
  }
  .service {
    all: unset;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    &:hover {
      background-color: var(--bg-tertiary);
    }
  }
  .service.active {
    background-color: var(--bg-tertiary);
  }
  [class*="services-list"] {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .services-list-left {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }
  .services-list-right {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    align-self: start;
  }
  [class*="services-illustration"] {
    align-self: center;
    height: 100%;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .services-illustration-1 {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
  .services-illustration-2 {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
  }
  @media (min-width: 480px) {
    .services-container {
      grid-template-rows: 30rem auto 30rem auto;
    }
    .services-list-left {
      grid-column: 1 / span 3;
      grid-row: 1 / 2;
    }
    .services-list-right {
      grid-column: span 3 / -1;
      grid-row: 3 / 4;
    }
    .services-illustration-1 {
      grid-column: span 3 / -1;
      align-self: start;
      grid-row: 1 / 2;
    }
    .services-illustration-2 {
      grid-column: 1 / span 3;
      align-self: start;
      grid-row: 3 / 4;
    }
  }
  @media (min-width: 720px) {
    .services-container {
      grid-template-rows: repeat(2, 400px);
    }
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
    .services-list-right {
      grid-row: 2 / 3;
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
      row-gap: 2rem;
    }
  }
  @media (min-width: 1920px) {
    .services-list-left {
      grid-column: 1 / span 3;
    }
    .services-list-right {
      grid-column: span 3 / -1;
    }
  }
  :global([data-theme="dark"]) {
    .service {
      h5 {
        color: var(--text-primary);
      }
      p {
        color: var(--text-tertiary);
      }
      &:hover {
        background-color: var(--bg-secondary);
      }
    }
    .service.active {
      background-color: var(--bg-dark);
    }
    .services-illustration-1,
    .services-illustration-2 {
      img {
        filter: brightness(1.5);
      }
    }
  }
</style>
