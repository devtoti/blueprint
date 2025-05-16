<script lang="ts">
  import BoxIllustration from "$lib/images/box-illustration.svelte";
  import Heading from "$lib/components/Heading.svelte";
  const UXservices = [
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
  const FrontendServices = [
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
    {#each UXservices as UXservice, ix}
      {@render item(UXservice.title, UXservice.description)}
    {/each}
  </div>
  <div class="services-list-right">
    {#each FrontendServices as FrontendService, ix}
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
    {#each FrontendServices as FrontendService, ix}
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
    padding: 0rem 1rem;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
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
    align-self: center;
  }
  [class*="services-illustration"] {
    align-self: center;
    padding: 0 1rem;
    height: 100%;
  }
  .services-illustration-1 {
    grid-column: span 2 / -1;
    grid-row: 1 / 2;
  }
  .services-illustration-2 {
    grid-column: 1 / span 2;
    grid-row: 2 / 3;
  }
  @media (min-width: 480px) {
    .services-list-left {
      grid-column: 1 / span 3;
    }
    .services-list-right {
      grid-column: span 3 / -1;
      grid-row: 3 / 4;
    }
    .services-illustration-1 {
      grid-column: span 3 / -1;
      align-self: start;
    }
    .services-illustration-2 {
      grid-column: 2 / span 2;
      align-self: start;
      grid-row: 3 / 4;
    }
  }
</style>
