<script lang="ts">
  import BoxIllustration from "$lib/images/paper-box.svelte";
  import Heading from "$lib/components/Heading.svelte";
  const uxServices = [
    {
      title: "Prototipos",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam?",
    },
    {
      title: "Diseño de Interfaces",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam?",
    },
    {
      title: "Ilustraciones",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam?",
    },
  ];
  const frontendServices = [
    {
      title: "Desarrollo de Aplicaciones",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam?",
    },
    {
      title: "Landing Pages",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam?",
    },
    {
      title: "Integración de APIs",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam?",
    },
  ];
  const uxServicesShort = uxServices.slice(0, 2);
  const frontendServicesShort = frontendServices.slice(0, 2);
</script>

{#snippet item(title: string, description: string)}
  <div class="service">
    <h5 class="arc-h4">{title}</h5>
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
    {#each uxServicesShort as UXservice, ix}
      {@render item(UXservice.title, UXservice.description)}
    {/each}
  </div>
  <div class="services-list-right">
    {#each frontendServicesShort as FrontendService, ix}
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
    {#each frontendServicesShort as FrontendService, ix}
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
    /* padding: 0rem 1rem; */
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(5, 1fr);
  }
  [class*="services-list"] {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0rem 1rem;
  }
  .services-list-left {
    grid-column: 1 / span 2;
    grid-row: 1 / 2;
  }
  .services-list-right {
    grid-column: span 2 / -1;
    grid-row: 2 / 3;
    text-align: right;
    align-self: center;
  }
  [class*="services-illustration"] {
    align-self: start;
    /* padding: 0 1rem; */
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
      grid-column: span 2 / -1;
      padding-right: 1rem;
      grid-row: 1 / 2;
    }
    .services-illustration-2 {
      grid-column: 1 / span 2;
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
