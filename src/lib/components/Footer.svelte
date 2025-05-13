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
  <HorizontalAxes width={window.width} height={window.height} />
</footer>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .footer-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: 2 / -2;
    padding-top: 1rem;
    .icons {
      padding-top: 0.5rem;
      display: flex;
      gap: 1rem;
      opacity: 0.75;
    }
  }
  .radial-deco-wrapper {
    width: 92px;
    height: 92px;
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .plan-info {
    outline: 1px solid var(--border-primary);
    padding: 0.25rem 0.5rem;
    h4 {
      font-weight: 700;
    }
  }

  .footer {
    position: relative;
    padding-bottom: 1rem;
    padding: 0;
    height: 20svh;
    height: fit-content;
    grid-column: 2 / -2;
    background-color: var(--bg-primary);
  }
  .footer-container {
    height: fit-content;
    grid-column: 1 / -1;
    width: 100%;
    background-color: var(--bg-primary);
    display: grid;
    grid-template-areas:
      "nav nav nav navR navR navR"
      "nav nav nav navR navR navR"
      "proj proj proj proj proj proj"
      "author author author author author author"
      "id id techs techs rev rev"
      "id id loc collab collab collab"
      "scale scale scale scale scale v";
    gap: 0;
    padding: 2rem;
  }
  .plan-info {
    height: 100%;
  }
  .proj {
    grid-area: proj;
  }
  .author {
    grid-area: author;
    max-height: 8rem;
    min-height: 4rem;
  }
  #clave h4 {
    padding: 0 !important;
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
  .navigation-left,
  .navigation-right {
  }
  .navigation-left {
    grid-area: nav;
  }
  .navigation-right {
    grid-area: navR;
  }
  ul {
    list-style: none;
    width: 100%;
    margin-bottom: 1rem;
    outline: 1px solid var(--border-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    li {
      padding-left: 0.5rem;
    }
  }
  @media (min-width: 480px) {
    .footer-container {
      grid-column: 2 / -2;
      padding: 1rem 0;
      grid-template-areas:
        "nav nav nav navR navR navR"
        "nav nav nav navR navR navR"
        "id id proj proj author author"
        "id id techs techs rev rev"
        "id id loc collab scale v";
    }
  }
  @media (min-width: 768px) {
    .footer-container {
      grid-column: 3 / -3;
    }
  }
  @media (min-width: 1029px) {
    .footer-container {
      padding: 1rem 0;
      grid-template-areas:
        "id nav nav nav navR navR navR proj author author scale scale loc loc"
        "id nav nav nav navR navR navR techs rev rev collab collab v v";
    }
    .navigation-left,
    .navigation-right {
      width: 100%;
    }
    ul {
      height: 100%;
      /* width: 100%; */
      /* min-width: 10rem; */
    }
    .author {
      height: 100%;
    }
    #clave {
      /* aspect-ratio: 1 / 1; */
      max-width: 8rem;
    }
  }
</style>
