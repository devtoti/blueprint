<script lang="ts">
  let { experience, design } = $props();
  import "../../styles/text-styles.css";
  import IconCode from "~icons/solar/code-bold-duotone";
  import PenNib from "$lib/icons/pen-nib.svg";
  import GitHubIcon from "$lib/icons/github.svelte";
  import DribbbleIcon from "$lib/icons/dribbble.svelte";
  import FigmaIcon from "$lib/icons/figma.svelte";
  import WallsThickCol from "$lib/images/walls-thick-col.svelte";
  import SolarLinkMinimalistic2Bold from "~icons/solar/link-minimalistic-2-bold";
  import SolarCloseCircleBoldDuotone from "~icons/solar/close-circle-bold-duotone";
  let isActive = $state(false);
  const closeOverview = (card: Card[]) => {
    card.forEach((role: any) => {
      role.active = false;
    });
    isActive = false;
  };
  type Card = {
    company: string;
    date: string;
    active: boolean;
    overview: string;
    figmaLink: string | null;
    url: string | null;
  };
  let designRoles = $state<Card[]>([
    {
      company: "Draftbit",
      date: "2024-2025",
      active: false,
      figmaLink: null,
      url: "https://draftbit.com/",
      overview:
        "Me desempeñé como diseñador UI/UX en Draftbit, una plataforma no-code, low-code para crear aplicaciones móviles desde cero. Fui responsable del diseño y desarrollo los prototipos de la aplicación, así como del sistema de diseño de la plataforma.",
    },
    {
      company: "Upwork",
      date: "2023 - now",
      active: false,
      figmaLink: null,
      url: "https://www.upwork.com/freelancers/~012c76ce4bf87c7147?mp_source=share",
      overview:
        "Ofrezco una gama amplia de servicios de diseño y asesorías técnicas en Upwork, una plataforma para encontrar y contratar freelancers. Elaboro prototipos, landing pages y aplicaciones web para clientes de todo el mundo.",
    },
    {
      company: "Totaldevs",
      date: "2021 - 2022",
      active: false,
      figmaLink: null,
      url: null,
      overview:
        "Asesoré a startups para la optimización del rendimiento de las landing pages mediante la metodología AIDA y la refinación de los conversion funnels para mejorar las métricas clave como visitas a la página, CVRs, CTRs y DTRs.",
    },
    {
      company: "La Loma CDMX",
      date: "2020 - 2022",
      active: false,
      figmaLink: null,
      url: null,
      overview:
        "Desarrollé la página web de Loma Residencial y administré las redes sociales de la empresa, una empresa desarrolladora de proyectos de vivienda en el Club de Golf México, Ciudad de México. Elaboré la campaña publicitaria y coordiné el proceso de venta de los departamentos por medios digitales.",
    },
  ]);
  let frontendRoles = $state([
    {
      company: "Upwork",
      date: "2024 -now",
      active: false,
      figmaLink: null,
      overview:
        "Realizo proyectos de desarrollo web utilizando frameworks como React, Next y Tailwind CSS. También llevo a cabo rediseño de landing pages para mejorar la conversión de leads y mejora de la experiencia de usuario.",
      url: "https://www.upwork.com/freelancers/~012c76ce4bf87c7147?mp_source=share",
    },
    {
      company: "Get In The Loop",
      date: "2024 - now",
      active: false,
      figmaLink: null,
      overview:
        "Encargado de desarrollar y dar mantenimiento al proyecto Social AI: Un portal para crear, automatizar y administrar contenido para redes sociales utilizando IA. Me aseguro de actualizar las plantillas de diseño utilizadas en campañas de marketing en Instragam, Facebook y Linkedin, para generar posts y publicaciones automáticas.",
      url: "https://getintheloop.ca",
    },
    {
      company: "LUSI Labs",
      date: "2022 - 2022",
      active: false,
      figmaLink: null,
      url: "https://lusilabs.com/",
      overview:
        "Me desempeñé como asesor de diseño en LUSI Labs, una empresa que desarrolla software mediante modelos de machine learning y modelos matemáticos. Realicé prototipos de diseño, wireframes y mockups en una serie de proyectos de corto plazo.",
    },
    {
      company: "Totaldevs",
      date: "2021 - 2022",
      active: false,
      figmaLink: null,
      url: null,
      overview:
        "Bootcamp. Ayudé a construir diversas páginas web en Wordpress mientras aprendía a programar en HTML, CSS y JavaScript. Comencé a familiarizarme con frameworks como React y SASS y a desarrollar aplicaciones web responsivas.",
    },
  ]);
</script>

{#if !isActive}
  <button
    class="experience-card"
    class:dev={!design}
    onclick={() => (isActive = !isActive)}
  >
    <div class="experience-card-icon">
      {#if experience.role === "Frontend Developer"}
        <IconCode />
      {:else}
        <img src="src/lib/icons/pen-nib.svg" alt="Pen Nib" />
      {/if}
      <span></span><span></span><span></span><span></span>
    </div>
    <h2 class="arc-h3">{experience.role}</h2>
    <p>{experience.description}</p>
  </button>
{:else}
  <div class="experience-card active" class:dev={!design} class:design>
    <button
      onclick={() => closeOverview(design ? designRoles : frontendRoles)}
      aria-label="Close experience card"
      class="close-button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        aria-label="Close"
      >
        <path
          fill="currentColor"
          d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
        />
      </svg>
    </button>

    <h2 class="arc-h3">{experience.role}</h2>
    <p>{experience.description}</p>
    <div class="experience-list">
      {#if design}
        {#each designRoles as role}
          <button
            class="experience-list-item left"
            onclick={() => (role.active = !role.active)}
            class:active={role.active}
          >
            <h4 class="arc-h4">{role.company}</h4>
            <p class="arc-txt-li">{role.date}</p>
            <div class="col-wrapper">
              <WallsThickCol />
            </div>
          </button>
          {#if role.active}
            <button
              class="arc-txt-li role-overview"
              onclick={() => (role.active = !role.active)}
            >
              <p class="arc-body-2">{role.overview}</p>
              <div class="link-wrapper">
                {#if role.figmaLink}
                  <a
                    class="experience-card-icon"
                    href={role.figmaLink}
                    target="_blank"
                  >
                    <FigmaIcon />
                    <span></span><span></span><span></span><span></span>
                  </a>
                {/if}
                {#if role.url}
                  <a
                    class="experience-card-icon"
                    href={role.url}
                    target="_blank"
                  >
                    <SolarLinkMinimalistic2Bold />
                    <span></span><span></span><span></span><span></span>
                  </a>
                {/if}
              </div>
            </button>
          {/if}
        {/each}
      {:else}
        {#each frontendRoles as role, ix}
          <button
            class="experience-list-item"
            onclick={() => (role.active = !role.active)}
            class:active={role.active}
          >
            <span>
              <h4 class="arc-h4">{role.company}</h4>
            </span>
            <p class="arc-txt-li">{role.date}</p>
            <div class="col-wrapper">
              <WallsThickCol />
            </div>
          </button>
          {#if role.active}
            <button
              class="arc-txt-li role-overview"
              onclick={() => (role.active = !role.active)}
            >
              <p class="arc-body-2">{role.overview}</p>
              <div class="link-wrapper">
                {#if role.figmaLink}
                  <a
                    class="experience-card-icon"
                    href={role.figmaLink}
                    target="_blank"
                  >
                    <FigmaIcon />
                    <span></span><span></span><span></span><span></span>
                  </a>
                {/if}
                {#if role.url}
                  <a
                    class="experience-card-icon"
                    href={role.url}
                    target="_blank"
                  >
                    <SolarLinkMinimalistic2Bold />
                    <span></span><span></span><span></span><span></span>
                  </a>
                {/if}
              </div>
            </button>
          {/if}
        {/each}
      {/if}
    </div>
    <div class="icons">
      {#if experience.role === "Frontend Developer"}
        <a
          class="experience-card-icon"
          href="https://github.com/devtoti"
          target="_blank"
        >
          <GitHubIcon />
          <span></span><span></span><span></span><span></span>
        </a>
      {:else}
        <a
          class="experience-card-icon"
          href="https://dribbble.com/totisketches"
          target="_blank"
        >
          <DribbbleIcon />
          <span></span><span></span><span></span><span></span>
        </a>
      {/if}
    </div>
  </div>
{/if}

<style>
  .experience-card {
    cursor: pointer;
  }
  .experience-card:hover {
    background-color: var(--bg-tertiary);
  }
  .experience-card,
  .experience-card.active {
    background-color: var(--bg-primary);
    max-width: 220px;
    min-height: 80px;
    border: 1px solid var(--border-tertiary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.2rem;
    padding: 0.5rem;
    padding-top: 1rem;
    background-image: radial-gradient(var(--bleu-100) 1px, transparent 0);
    background-size: 10px 10px;
    background-position: -5px -5px;
    p {
      color: var(--text-secondary);
    }
  }
  .experience-card.dev {
    align-items: flex-start !important;
  }
  .link-wrapper {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;
    a:hover {
      background-color: var(--bg-tertiary);
    }
  }
  .close-button {
    all: unset;
    cursor: pointer;
    width: fit-content;
  }
  .close-button:hover {
    color: var(--text-primary);
    transform: scale(1.05);
    transform-origin: center;
  }
  .experience-card-icon {
    all: unset;
    width: 24px;
    height: 24px;
    background-color: var(--bg-tertiary);
    color: var(--icon-primary) !important;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 0.5rem;
    span:first-of-type {
      position: absolute;
      inset: 0 auto;
      width: 28px;
      height: 1px;
      border-top: 1px solid var(--border-tertiary);
    }
    span:nth-of-type(2) {
      position: absolute;
      inset: auto 0 auto auto;
      width: 1px;
      height: 28px;
      border-left: 1px solid var(--border-tertiary);
    }
    span:nth-of-type(3) {
      position: absolute;
      inset: auto auto 0 auto;
      width: 28px;
      height: 1px;
      border-bottom: 1px solid var(--border-tertiary);
    }
    span:last-of-type {
      position: absolute;
      inset: auto auto auto 0;
      width: 1px;
      height: 28px;
      border-left: 1px solid var(--border-tertiary);
    }
  }
  .experience-card:nth-child(odd) {
    align-items: flex-end;
  }
  .experience-list {
    display: grid;
    grid-template-rows: repeat(4, auto);
    align-items: center;
    align-content: center;
    flex-direction: column;
    background-color: var(--bleu-50);
    margin: 1rem 0;
    width: 100%;
  }
  .experience-card.active {
    background-color: var(--white);
    background-image: radial-gradient(
      var(--bleu-50) 1px,
      transparent 0
    ) !important;
    color: var(--text-secondary);
  }
  .experience-list-item {
    all: unset;
    display: grid;
    width: auto;
    height: 2rem;
    grid-template-columns: 1.2fr 1fr 1rem;
    place-content: center;
    place-items: center;
    padding: 0.25rem 0.5rem;
    span {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    h4 {
      justify-self: flex-start;
      font-weight: 600;
      padding-left: 0.5rem;
      width: fit-content;
    }
    &.active {
      background-color: var(--bleu-300);
      * {
        color: var(--white) !important;
      }
    }
  }
  .experience-list-item:hover {
    background-color: var(--bleu-100);
    cursor: pointer;
  }
  .col-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 2rem;
  }
  .col-wrapper:after {
    content: "";
    position: absolute;
    width: 1px;
    bottom: -10px;
    height: 0.75rem;
    background-color: var(--border-tertiary);
    color: var(--border-tertiary);
  }
  .experience-list-item.active .col-wrapper:after {
    display: none;
  }
  .experience-card.active .experience-list-item:last-child .col-wrapper:after {
    display: none;
  }
  .icons {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    .experience-card-icon {
      background-color: var(--bg-primary) !important;
      color: var(--icon-primary) !important;
    }
  }
  .experience-card.active.design {
    text-align: right;
    .close-button {
      margin-left: auto;
    }
    .experience-list-item {
      grid-template-columns: 1rem 1fr 1.2fr;
      h4 {
        order: -2;
        padding-left: auto;
        width: 100%;
      }
      p {
        order: -3;
      }
      .col-wrapper {
        order: -4;
      }
    }
    .icons {
      flex-direction: row-reverse;
    }
  }
  .role-overview {
    width: 100%;
    height: 100%;
    background-color: var(--bg-secondary);
    color: var(--text-primary);
    display: block;
    z-index: 100;
    text-align: left;
    padding: 0.5rem;
    grid-column: 1 / -1;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      background-color: var(--bg-tertiary);
    }
  }
  @media (min-width: 480px) {
    .experience-card,
    .experience-card.active {
      width: 320px !important;
      max-width: 320px !important;
    }
  }
</style>
