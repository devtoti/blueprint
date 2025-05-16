<script lang="ts">
  import HorizontalAxes from "./HorizontalAxes.svelte";
  import RadialDeco from "$lib/images/radial-deco.svelte";
  import IconCode from "~icons/solar/code-bold-duotone";
  import Github from "$lib/icons/github.svelte";
  import Linkedin from "$lib/icons/linkedin.svelte";
  import Dribbble from "$lib/icons/dribbble.svelte";
  import Upwork from "$lib/icons/upwork.svelte";
  let { window } = $props();
</script>

<footer class="footer grainy">
  {#if window.width <= 540}
    <div class="radial-deco-wrapper">
      <RadialDeco />
    </div>
  {/if}
  <span class="footer-title">
    <h2 class="arc-h2">Blueprint.dev</h2>
    <p class="arc-body-2">Built by an architect</p>
    <div class="icons">
      <Github />
      <Linkedin />
      <Dribbble />
      <Upwork />
    </div>
  </span>
  <div class="footer-container">
    <article class="navigation-left">
      <ul>
        <li class="arc-body-2">Home</li>
        <li class="arc-body-2">About</li>
        <li class="arc-body-2">Projects</li>
        <li class="arc-body-2">Contact</li>
        <li class="arc-body-2">Blog</li>
        <li class="arc-body-2">Terms</li>
      </ul>
    </article>
    <article class="navigation-right">
      <ul>
        <li class="arc-body-2">Home</li>
        <li class="arc-body-2">About</li>
        <li class="arc-body-2">Projects</li>
        <li class="arc-body-2">Contact</li>
        <li class="arc-body-2">Blog</li>
        <li class="arc-body-2">Terms</li>
      </ul>
    </article>
    <article class="plan-info techs">
      <h4 class="arc-h4">Technologies</h4>
      <p class="arc-body-2">Svelte, TypeScript, Figma</p>
    </article>
    <article class="plan-info proj">
      <h4 class="arc-h4">Project</h4>
      <p class="arc-body-2">Frontend & Design Portfolio</p>
    </article>
    <article class="plan-info loc">
      <h4 class="arc-h4">Location</h4>
      <p class="arc-body-2">CDMX, Mexico</p>
    </article>
    <article class="plan-info scale">
      <h4 class="arc-h4">Scale</h4>
      <p class="arc-body-2">100% Responsive</p>
    </article>
    <article class="plan-info rev">
      <h4 class="arc-h4">Last Revision</h4>
      <p class="arc-body-2">2025-05-10</p>
    </article>
    <article class="plan-info collab">
      <h4 class="arc-h4">Collaborators</h4>
      <p class="arc-body-2">@devtoti</p>
    </article>
    <article class="plan-info author">
      <h4 class="arc-h4">Head Architect</h4>
      <p class="arc-body-2">Antonio Ruiz</p>
    </article>
    <article class="plan-info v">
      <h4 class="arc-h1">V1.0</h4>
    </article>
    <article class="plan-info id" id="clave">
      <h4 class="arc-h0">A1</h4>
    </article>
  </div>
</footer>
<HorizontalAxes width={window.width} height={window.height} />

<style>
  .footer-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: 2 / -2;
    grid-row: 2 / 3;
    padding-top: 1rem;
    .icons {
      padding-top: 0.5rem;
      padding-bottom: 1rem;
      display: flex;
      gap: 1rem;
      opacity: 0.75;
    }
  }

  .radial-deco-wrapper {
    width: 92px;
    height: 92px;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .plan-info {
    outline: 1px solid var(--border-primary);
    padding-left: 0.25rem;
    width: 100%;
    h4 {
      font-weight: 700;
      padding-top: 0.25rem;
    }
    p {
      padding-bottom: 0.25rem;
    }
  }
  .footer {
    position: relative;
    padding-bottom: 1rem;
    padding: 0;
    height: 20svh;
    max-width: 100svw;
    height: fit-content;
    grid-column: 2 / -2;
    background-color: var(--bg-primary);
  }
  .footer-container {
    height: fit-content;
    grid-column: 2 / -2;
    width: 100%;
    grid-row: 3 / 4;
    background-color: var(--bg-primary);
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(7, auto);
    grid-template-areas:
      "nav nav nav navR navR navR"
      "nav nav nav navR navR navR"
      "proj proj proj proj proj proj"
      "author author author author author author"
      "techs techs techs techs techs techs"
      "id id id scale scale scale"
      "id id id loc loc loc"
      "id id id v v v"
      "rev rev rev collab collab collab";
    gap: 0;
    padding-bottom: 1rem;
  }
  .proj {
    grid-area: proj;
  }
  .author {
    grid-area: author;
  }
  #clave {
    h4 {
      padding: 0 !important;
    }
  }
  .id {
    grid-area: id;
    display: grid;
    place-items: center;
  }
  .techs {
    grid-area: techs;
  }
  .loc {
    grid-area: loc;
  }
  .collab {
    grid-area: collab;
  }
  .scale {
    grid-area: scale;
  }
  .rev {
    grid-area: rev;
  }
  .v {
    grid-area: v;
  }
  .navigation-left {
    grid-area: nav;
  }
  .navigation-right {
    grid-area: navR;
  }
  .navigation-left,
  .navigation-right {
    width: 100%;
  }
  ul {
    list-style: none;
    margin-bottom: 1rem;
    outline: 1px solid var(--border-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    li {
      padding-left: 0.5rem;
    }
  }
  @media (min-width: 480px) {
    .footer-container {
      grid-column: 3 / -3;
      padding: 1rem 0;
      grid-template-areas:
        "nav nav nav navR navR navR"
        "nav nav nav navR navR navR"
        "proj proj proj author author author"
        "techs techs techs collab collab collab"
        "id id id loc loc rev"
        "id id id scale scale v";
    }
  }
  @media (min-width: 1029px) {
    .footer-container {
      padding: 1rem 0;
      grid-template-areas:
        "nav nav nav navR navR navR"
        "nav nav nav navR navR navR"
        "id proj author author techs techs"
        "id loc loc collab rev rev"
        "id scale scale scale scale v";
    }
    .navigation-left {
      text-align: right;
      ul {
        padding-right: 0.5rem;
      }
    }
  }
</style>
