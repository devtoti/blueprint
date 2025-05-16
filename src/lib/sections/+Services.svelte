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
      title: "Sistemas de Diseño",
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
      title: "Animaciones Interactivas",
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
<section class="services-container">
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
</section>

<style>
  .services-container {
    width: 100%;
    grid-column: 1 / -1;
    background-color: var(--bg-primary);
    gap: 1rem;
  }
  [class*="services-list"] {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .services-list-left {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
  }
  .services-list-right {
    grid-column: 4 / -2;
    grid-row: 3 / 4;
    align-self: center;
  }
  [class*="services-illustration"] {
    max-height: 15rem;
    align-self: center;
  }
  .services-illustration-1 {
    grid-column: 4 / -2;
    grid-row: 2 / 3;
  }
  .services-illustration-2 {
    grid-column: 2 / 4;
    grid-row: 3 / 4;
  }
</style>
