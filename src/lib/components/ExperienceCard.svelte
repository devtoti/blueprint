<script lang="ts">
  let { experience, design } = $props();
  import "../../styles/text-styles.css";
  import IconCode from "~icons/solar/code-bold-duotone";
  import Text from "$lib/components/Text.svelte";
  import IconPenNib from "$lib/icons/pen-nib.svelte";
  import GitHubIcon from "$lib/icons/github.svelte";
  import { dictionary } from "$lib/dictionary";
  import DribbbleIcon from "$lib/icons/dribbble.svelte";
  import FigmaIcon from "$lib/icons/figma.svelte";
  import WallsThickCol from "$lib/images/walls-thick-col.svelte";
  import SolarLinkMinimalistic2Bold from "~icons/solar/link-minimalistic-2-bold";
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
    overview: { en: string; es: string } | string;
    figmaLink: string | null;
    url: string | null;
  };
  let frontendRoles = $state(dictionary["projects-frontend"]);
  let designRoles = $state(dictionary["projects-design"]);
</script>

{#if !isActive}
  <button
    class="experience-card"
    class:dev={!design}
    onclick={() => (isActive = !isActive)}
    aria-label="Open and explore my career path"
  >
    <div class="experience-card-icon">
      {#if experience.role === "Frontend Developer"}
        <IconCode />
      {:else}
        <IconPenNib />
      {/if}
      <span></span><span></span><span></span><span></span>
    </div>
    <h2 class="arc-h4">{experience.role}</h2>
    <div class="tag-container arc-body-2">
      {#each experience.description as description}
        <span class="tag">{description}</span>
      {/each}
    </div>
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
        role="presentation"
      >
        <path
          fill="currentColor"
          d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
        />
      </svg>
    </button>

    <h2 class="arc-h3">{experience.role}</h2>
    <div class="tag-container arc-body-2">
      {#each experience.description as description}
        <span class="tag">{description}</span>
      {/each}
    </div>
    <div class="experience-list">
      {#if design}
        {#each designRoles as role, ix}
          <button
            class="experience-list-item left"
            onclick={() => (role.active = !role.active)}
            class:active={role.active}
            aria-label="Open my design experience card with my career path"
          >
            <h4 class="arc-h5">{role.company}</h4>
            <p class="arc-txt-li">{role.date}</p>
            <div class="col-wrapper">
              <WallsThickCol />
            </div>
          </button>
          {#if role.active}
            <button
              class="arc-txt-li role-overview"
              onclick={() => (role.active = !role.active)}
              aria-label="Close my design experience card overview"
            >
              <p class="arc-body-2">
                <Text
                  text="overview"
                  section="projects-design"
                  sectionIx={ix}
                />
              </p>
              <div class="link-wrapper">
                {#if role.figmaLink}
                  <a
                    class="experience-card-icon"
                    href={role.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Visit the official Figma file for " +
                      role.company +
                      " (opens in new tab)"}
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
                    rel="noopener noreferrer"
                    aria-label={"Visit the official website for " +
                      role.company +
                      " (opens in new tab)"}
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
            aria-label="Open my frontend developer experience card with my career path"
          >
            <span>
              <h4 class="arc-h5">{role.company}</h4>
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
              aria-label="Close my frontend developer experience card overview"
            >
              <p class="arc-body-2">
                <Text
                  text="overview"
                  section="projects-frontend"
                  sectionIx={ix}
                />
              </p>
              <div class="link-wrapper">
                {#if role.figmaLink}
                  <a
                    class="experience-card-icon"
                    href={role.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Visit the official Figma file for " +
                      role.company +
                      " (opens in new tab)"}
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
                    rel="noopener noreferrer"
                    aria-label={"Visit the official website for " +
                      role.company +
                      " (opens in new tab)"}
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
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile @devtoti (opens in new tab)"
        >
          <GitHubIcon />
          <span></span><span></span><span></span><span></span>
        </a>
      {:else}
        <a
          class="experience-card-icon"
          href="https://dribbble.com/totisketches"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Dribbble portfolio @totisketches (opens in new tab)"
        >
          <DribbbleIcon />
          <span></span><span></span><span></span><span></span>
        </a>
      {/if}
    </div>
  </div>
{/if}

<style>
  .experience-card:not(.active) {
    cursor: pointer;
  }
  .experience-card:hover {
    background-color: var(--bg-tertiary);
  }
  .experience-card,
  .experience-card.active {
    background-color: var(--bg-primary);
    min-height: 80px;
    border: 1px solid var(--border-tertiary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.2rem;
    padding: 0.5rem;
    padding-top: 1rem;
    background-image: radial-gradient(var(--gray-alpha-10) 1px, transparent 0);
    background-size: 10px 10px;
    background-position: -5px -5px;
    p {
      color: var(--text-secondary);
      text-align: right;
    }
  }
  .experience-card.dev {
    align-items: flex-start !important;
    width: 100%;
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
    width: 100%;
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
    background-color: var(--bg-primary);
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
    background-color: var(--bg-light);
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
      color: var(--text-primary);
    }
    &.active {
      background-color: var(--bg-light-hover);
      border: 1px solid var(--border-tertiary);
      color: var(--text-tertiary);
      border-bottom: none;
      p {
        color: var(--text-tertiary) !important;
        font-weight: 600 !important;
      }
      h4 {
        font-weight: 700 !important;
      }
    }
  }
  .experience-list-item:hover {
    background-color: var(--bg-light-hover);
    cursor: pointer;
    p {
      color: var(--text-primary);
    }
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
    background-color: var(--bg-primary);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    color: var(--text-primary);
    display: block;
    z-index: 30;
    text-align: left;
    padding: 0.5rem;
    grid-column: 1 / -1;
    border: none;
    outline: none;
    cursor: pointer;
    border: 1px solid var(--border-tertiary);
    border-top: none;
    &:hover {
      background-color: var(--bg-light);
    }
  }
  .tag-container {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    flex-wrap: wrap;
    .tag {
      background-color: var(--bg-light);
      padding: 0.1rem 0.5rem;
      border-radius: 0.25rem;
      color: var(--text-secondary);
      border: 1px solid var(--border-light);
    }
  }
  .experience-card.active .tag-container {
    .tag {
      background-color: var(--bg-primary);
      padding: 0.1rem 0.5rem;
      border-radius: 0.25rem;
      font-size: 12px;
      color: var(--text-secondary);
      border: 1px solid var(--border-light);
    }
  }
  @media (min-width: 480px) {
    .experience-card,
    .experience-card.active {
      width: 320px !important;
      max-width: 320px !important;
    }
  }
  :global([data-theme="dark"]) {
    .experience-card {
      border-color: var(--border-primary);
    }
    .role-overview:hover {
      background-color: var(--bg-secondary);
    }
    .experience-card-icon {
      background-color: var(--bg-secondary) !important;
      color: var(--icon-light) !important;
    }
    .experience-card {
      background-image: radial-gradient(
        var(--bleu-50) 1px,
        transparent 0
      ) !important;
    }
    .experience-list-item {
      h4,
      p {
        color: var(--text-primary) !important;
      }
    }
    .experience-list-item.active {
      h4,
      p {
        color: var(--white) !important;
      }
    }
  }
</style>
