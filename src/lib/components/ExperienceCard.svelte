<script lang="ts">
  let { experience, design } = $props();
  import IconCode from "~icons/solar/code-bold-duotone";
  import PenNib from "$lib/icons/pen-nib.svg";
  import WallsThickCol from "$lib/images/walls-thick-col.svelte";
  import SolarLinkMinimalistic2Bold from "~icons/solar/link-minimalistic-2-bold";
  import SolarCloseCircleBoldDuotone from "~icons/solar/close-circle-bold-duotone";
  let isActive = $state(false);
  let designRoles = $state([
    {
      company: "Draftbit",
      date: "2024-2025",
      active: false,
      overview:
        "I was a frontend developer at Draftbit, a platform for creating mobile apps. I was responsible for the design and development of the app, and for the integration of the app with the backend.",
    },
    {
      company: "Upwork",
      date: "2023 - now",
      active: false,
      overview:
        "I was a frontend developer at Upwork, a platform for finding and hiring freelancers. I was responsible for the design and development of the app, and for the integration of the app with the backend.",
    },
    {
      company: "Totaldevs",
      date: "2021 - 2022",
      active: false,
      overview:
        "I was a frontend developer at Totaldevs, a platform for finding and hiring freelancers. I was responsible for the design and development of the app, and for the integration of the app with the backend.",
    },
    {
      company: "Loma Residencial",
      date: "2020 - 2022",
      active: false,
      overview:
        "I was a frontend developer at Loma Residencial, a platform for finding and hiring freelancers. I was responsible for the design and development of the app, and for the integration of the app with the backend.",
    },
  ]);
  let frontendRoles = $state([
    {
      company: "Upwork",
      date: "2024 -now",
      active: false,
      overview:
        "I was a frontend developer at Upwork, a platform for finding and hiring freelancers. I was responsible for the design and development of the app, and for the integration of the app with the backend.",
    },
    {
      company: "Get In The Loop",
      date: "2024 - now",
      active: false,
      overview:
        "I was a frontend developer at Get In The Loop, a platform for finding and hiring freelancers. I was responsible for the design and development of the app, and for the integration of the app with the backend.",
    },
    {
      company: "LUSI Labs",
      date: "2022 - 2022",
      active: false,
      overview:
        "I was a frontend developer at LUSI Labs, a platform for finding and hiring freelancers. I was responsible for the design and development of the app, and for the integration of the app with the backend.",
    },
    {
      company: "Totaldevs",
      date: "2021 - 2022",
      active: false,
      overview:
        "I was a frontend developer at Totaldevs, a platform for finding and hiring freelancers. I was responsible for the design and development of the app, and for the integration of the app with the backend.",
    },
  ]);
</script>

{#if !isActive}
  <button class="experience-card" onclick={() => (isActive = !isActive)}>
    <div class="experience-card-icon">
      {#if experience.role === "Frontend Developer"}
        <IconCode />
      {:else}
        <img src="src/lib/icons/pen-nib.svg" alt="Pen Nib" />
      {/if}
      <span></span><span></span><span></span><span></span>
    </div>
    <h3>{experience.role}</h3>
    <p>{experience.description}</p>
  </button>
{:else}
  <div class="experience-card-active" class:design>
    <button
      onclick={() => (isActive = !isActive)}
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

    <h3>{experience.role}</h3>
    <p>{experience.description}</p>
    <div class="experience-list">
      {#if design}
        {#each designRoles as role}
          <button
            class="experience-list-item"
            onclick={() => (role.active = !role.active)}
          >
            <SolarLinkMinimalistic2Bold />
            <h4 class="arc-txt-li">{role.company}</h4>
            <p class="arc-txt-li">{role.date}</p>
            <div class="col-wrapper">
              <WallsThickCol />
            </div>
          </button>
          {#if role.active}
            <p class="arc-txt-li role-overview">{role.overview}</p>
          {/if}
        {/each}
      {:else}
        {#each frontendRoles as role, ix}
          <button
            class="experience-list-item"
            onclick={() => (role.active = !role.active)}
          >
            <SolarLinkMinimalistic2Bold />
            <h4 class="arc-txt-li">{role.company}</h4>
            <p class="arc-txt-li">{role.date}</p>
            <div class="col-wrapper">
              <WallsThickCol />
            </div>
          </button>
          {#if role.active}
            <p class="arc-txt-li role-overview">{role.overview}</p>
          {/if}
        {/each}
      {/if}
    </div>
    <div class="icons">
      <div class="experience-card-icon">
        <IconCode />
        <span></span><span></span><span></span><span></span>
      </div>
      <div class="experience-card-icon">
        <IconCode />
        <span></span><span></span><span></span><span></span>
      </div>
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
  .experience-card-active {
    background-color: var(--bg-primary);
    width: 260px;
    min-height: 80px;
    border: 1px solid var(--border-tertiary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    gap: 0.2rem;
    padding: 0.5rem;
    padding-top: 1rem;
    background-image: radial-gradient(var(--bleu-100) 1px, transparent 0);
    background-size: 10px 10px;
    background-position: -5px -5px;
    h3 {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--text-primary);
      letter-spacing: 0.05em;
      font-weight: 600;
      text-transform: uppercase;
    }
    p {
      font-size: 0.8rem;
      color: var(--text-secondary);
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
    width: 24px;
    height: 24px;
    background-color: var(--bg-tertiary);
    color: var(--icon-primary);
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
  }
  .experience-card-active {
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
    grid-template-columns: 1rem 1fr 1fr 1rem;
    place-content: center;
    place-items: center;
    padding: 0.25rem 0.5rem;
    h4 {
      justify-self: flex-start;
      font-weight: 600;
      padding-left: 0.5rem;
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
  .experience-card-active .experience-list-item:last-child .col-wrapper:after {
    display: none;
  }
  .icons {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    .experience-card-icon {
      background-color: var(--bg-primary);
    }
  }
  .experience-card-active.design {
    text-align: right;
    .close-button {
      margin-left: auto;
    }
    .experience-list-item {
      h4 {
        order: -2;
        padding-left: 0;
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
    color: var(--text-primary);
    display: block;
    z-index: 100;
    text-align: left;
    padding: 0.5rem;
    grid-column: 1 / -1;
  }
</style>
