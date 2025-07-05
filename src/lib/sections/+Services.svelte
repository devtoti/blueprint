<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import Text from "$lib/components/Text.svelte";
  import { dictionary as services } from "$lib/dictionary";
  const imageContext = import.meta.glob("$lib/images/*.png", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>;
  const uxServices = $state(
    services["services-list"]
      .filter((service) => service.type === "design")
      .map((service, index) => ({ ...service, active: index === 0 }))
  );
  const frontendServices = $state(
    services["services-list"]
      .filter((service) => service.type === "development")
      .map((service, index) => ({ ...service, active: index === 0 }))
  );
  function handleActive(item: any, type: string) {
    if (type === "design") {
      activeDesign = item;
      uxServices.forEach((service) => {
        service.active = service.title.en === item.title.en;
      });
    } else {
      activeFrontend = item;
      frontendServices.forEach((service) => {
        service.active = service.title.en === item.title.en;
      });
    }
  }
  let activeDesign = $derived(uxServices[0]);
  let activeFrontend = $derived(frontendServices[0]);
  let firstDevelopmentIndex = $derived(
    Array.from(services["services-list"]).findIndex(
      (service) => service.type === "development"
    )
  );

  function handleClick(service: any, type: string) {
    const isMobile = window.innerWidth <= 720;
    handleActive(service, type);
    if (isMobile && type === "design") {
      scrollToElement("services-illustration-1");
    } else if (isMobile && type === "development") {
      scrollToElement("services-illustration-2");
    }
  }
  function handleHover(service: any, type: string) {
    const isMobile = window.innerWidth <= 720;
    if (isMobile) return;
    handleActive(service, type);
  }

  function scrollToElement(el: string) {
    const element = document.getElementsByClassName(el)[0];
    const offset = 80;
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
</script>

{#snippet item(service: any, type: string, ix: number)}
  <button
    class="service"
    class:active={service.active}
    onmouseenter={(e) => handleHover(service, type)}
    onclick={() => handleClick(service, type)}
  >
    <h5 class="arc-h4">
      <Text section="services-list" text="title" sectionIx={ix} />
    </h5>
    <p class="arc-body-1">
      <Text section="services-list" text="description" sectionIx={ix} />
    </p>
  </button>
{/snippet}

<Heading page="services" alignRight />
<article class="services-container">
  <div class="services-list-left">
    {#each uxServices as UXservice, ix}
      {@render item(UXservice, "design", ix)}
    {/each}
  </div>
  <div class="services-list-right">
    {#each frontendServices as feService, ix}
      {@render item(feService, "development", firstDevelopmentIndex + ix)}
    {/each}
  </div>
  <div class="services-illustration-1 design">
    <img
      src={imageContext[`/src/lib/images/${activeDesign.img}`]}
      alt="Design"
    />
  </div>
  <div class="services-illustration-2 development">
    <img
      src={imageContext[`/src/lib/images/${activeFrontend.img}`]}
      alt="Development"
    />
  </div>
</article>

<style>
  .services-container {
    width: 100%;
    grid-column: 1 / -1;
    /* background-color: var(--bg-primary); */
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
    border: 1px solid var(--border-light);
    background-color: var(--white);
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
    justify-content: space-evenly;
  }
  .services-list-right {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    align-self: start;
    justify-content: space-evenly;
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
    .service {
      background-color: var(--bg-primary);
    }
    .service.active {
      background-color: var(--bg-light);
    }
    .services-illustration-1,
    .services-illustration-2 {
      img {
        filter: brightness(1.5);
      }
    }
  }
</style>
