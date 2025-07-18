<script lang="ts">
  import "../../styles/text-styles.css";
  import RadialDeco from "$lib/images/radial-deco.svelte";
  import Github from "$lib/icons/github.svelte";
  import Linkedin from "$lib/icons/linkedin.svelte";
  import Dribbble from "$lib/icons/dribbble.svelte";
  import Upwork from "$lib/icons/upwork.svelte";
  import Text from "$lib/components/Text.svelte";
  import HorizontalAxes from "$lib/components/HorizontalAxes.svelte";
  import { showHideAxesOnClick } from "$lib/utils";
  let { window } = $props();
</script>

<footer class="footer grainy" id="footer">
  {#if window.width <= 540}
    <div class="radial-deco-wrapper">
      <RadialDeco />
    </div>
  {/if}
  <span class="footer-title">
    <h2 class="arc-h2"><Text section="footer-legend" text="title" /></h2>
    <p class="arc-body-2">
      <Text section="footer-legend" text="description" />
    </p>
    <div class="icons" role="group" aria-label="Social media links">
      <a
        href="https://github.com/devtoti"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub profile @devtoti (opens in new tab)"
      >
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/devtoti"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn profile @devtoti (opens in new tab)"
      >
        <Linkedin />
      </a>
      <a
        href="https://dribbble.com/totisketches"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Dribbble portfolio @totisketches (opens in new tab)"
      >
        <Dribbble />
      </a>
      <a
        href="https://www.upwork.com/freelancers/~012c76ce4bf87c7147"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Upwork profile (opens in new tab)"
      >
        <Upwork />
      </a>
    </div>
  </span>
  <div class="footer-container">
    <article class="nav-links">
      <article
        class="navigation-left"
        role="navigation"
        aria-label="Primary navigation links"
      >
        <ul>
          <li>
            <a href="/" class="arc-body-2"
              ><Text section="navigation" text="home" /></a
            >
          </li>
          <li>
            <a href="/#work-experience" class="arc-body-2"
              ><Text section="navigation" text="home-work-experience" /></a
            >
          </li>
          <li>
            <a href="/#projects" class="arc-body-2"
              ><Text section="navigation" text="home-projects" /></a
            >
          </li>
          <li>
            <a href="/#skills" class="arc-body-2"
              ><Text section="navigation" text="home-skills" /></a
            >
          </li>
          <li>
            <a href="/#services" class="arc-body-2"
              ><Text section="navigation" text="home-services" /></a
            >
          </li>
          <!-- <a href="/mystery" class="arc-body-2">Mystery Box</a> -->
        </ul>
      </article>
      <article
        class="navigation-right"
        role="navigation"
        aria-label="Secondary navigation links"
      >
        <ul>
          <li>
            <a href="/about" class="arc-body-2">Blueprint</a>
          </li>
          <li>
            <a href="/dev" class="arc-body-2"
              ><Text section="navigation" text="development" /></a
            >
          </li>
          <li>
            <a href="/design" class="arc-body-2"
              ><Text section="navigation" text="design" /></a
            >
          </li>
          <li>
            <a href="/concept" class="arc-body-2"
              ><Text section="navigation" text="concept" /></a
            >
          </li>
          <li>
            <a href="/contact" class="arc-body-2"
              ><Text section="navigation" text="contact" /></a
            >
          </li>
          <li>
            <a href="/about" class="arc-body-2"
              ><Text section="navigation" text="about" /></a
            >
          </li>
        </ul>
      </article>
    </article>
    <article class="plan-info techs">
      <span class="arc-h6"><Text section="footer-legend" text="techs" /></span>
      <p class="arc-body-3">Svelte, TypeScript, Figma</p>
    </article>
    <article class="plan-info proj">
      <h6 class="arc-h6"><Text section="footer-legend" text="project" /></h6>
      <p class="arc-body-3">Frontend & Design Portfolio</p>
    </article>
    <article class="plan-info loc">
      <h6 class="arc-h6"><Text section="footer-legend" text="location" /></h6>
      <p class="arc-body-3">CDMX, México</p>
    </article>
    <article class="plan-info scale">
      <h6 class="arc-h6"><Text section="footer-legend" text="scale" /></h6>
      <div id="scale">
        <div class="scale-top">
          <span class="arc-h6"></span>
          <span class="arc-h6"></span>
          <span class="arc-h6"></span>
          <span class="arc-h6"></span>
          <span class="arc-h6"></span>
        </div>
        <div class="scale-bottom">
          <span class="arc-h6"></span>
          <span class="arc-h6"></span>
          <span class="arc-h6"></span>
          <span class="arc-h6"></span>
          <span class="arc-h6"></span>
        </div>
        <!-- <ul>
          <li class="arc-h6">1</li>
          <li class="arc-h6">2.5</li>
          <li class="arc-h6">5</li>
          <li class="arc-h6">10</li>
          <li class="arc-h6">20</li>
        </ul> -->
      </div>
    </article>
    <article class="plan-info rev">
      <h6 class="arc-h6">
        <Text section="footer-legend" text="last-update" />
      </h6>
      <p class="arc-body-3">2025-07-18</p>
    </article>
    <article class="plan-info collab">
      <h6 class="arc-h6">
        <Text section="footer-legend" text="collaborators" />
      </h6>
      <p class="arc-body-3">@devtoti</p>
    </article>
    <article class="plan-info author">
      <h6 class="arc-h6"><Text section="footer-legend" text="author" /></h6>
      <p class="arc-body-3">Antonio Ruiz</p>
    </article>
    <article class="plan-info v">
      <h4 class="arc-h3">V1.0</h4>
    </article>
    <article class="plan-info id" id="clave">
      <h5 class="arc-h0">A1</h5>
    </article>
  </div>
</footer>
<HorizontalAxes width={innerWidth} handleClick={showHideAxesOnClick} />

<style>
  footer {
    background-image: linear-gradient(
        to right,
        var(--gray-alpha-05) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, var(--gray-alpha-05) 1px, transparent 1px);
    background-size: 16px 16px;
    background-position: -5px -5px;
  }
  h6 {
    color: var(--text-primary) !important;
  }
  a {
    padding: 0.5rem 0.5rem;
  }
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
      display: flex;
      opacity: 0.75;
    }
  }
  .footer-padding {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
    height: 0.5rem;
    width: 100%;
    background-color: var(--bleu-100);
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
    height: fit-content;
    max-width: 100svw;
    grid-column: 2 / -2;
    background-color: var(--bg-primary);
    padding-bottom: 1rem;
  }

  .footer-container {
    height: fit-content;
    grid-column: 2 / -2;
    width: 100%;
    grid-row: 3 / 4;
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
    min-height: 2rem;
  }
  #scale {
    display: grid;
    grid-template-columns: 1fr 2fr 2.5fr 5fr 10fr;
    grid-template-rows: repeat(2, 1fr) 12px;
    gap: 0;
    margin: 0 0.5rem;
    height: 8px;

    li {
      display: none;
      height: 4px;
      width: 100%;
    }
    .scale-top {
      display: grid;
      min-height: 4px;
      grid-template-columns: 1fr 2fr 2.5fr 5fr 10fr;
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      span:nth-child(odd) {
        background-color: var(--bleu-600);
      }
    }
    .scale-bottom {
      display: grid;
      min-height: 4px;
      grid-template-columns: 1fr 2fr 2.5fr 5fr 10fr;
      grid-column: 1 / -1;
      grid-row: 2 / 3;
      span:nth-child(even) {
        background-color: var(--bleu-600);
      }
    }
    ul {
      display: contents;
      li {
        color: var(--text-tertiary);
        font-weight: 400;
        grid-row: 3 / 4;
        /* display: inline-block; */
        width: 100%;
        text-align: center;
        &:nth-child(1) {
          grid-column: 1 / 2;
        }
        &:nth-child(2) {
          grid-column: 2 / 3;
        }
        &:nth-child(3) {
          grid-column: 3 / 4;
        }
        &:nth-child(4) {
          grid-column: 4 / 5;
        }
      }
    }
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
    width: 140px;
  }
  ul {
    list-style: none;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    a {
      text-decoration: none;
      color: var(--text-tertiary);
      padding: 0;
      justify-content: flex-end;
      &:hover {
        color: var(--bleu-600) !important;
        font-weight: 500;
      }
    }
  }
  .navigation-left ul {
    a {
      justify-content: flex-end;
    }
  }
  .navigation-right ul {
    a {
      justify-content: flex-start;
    }
  }
  .nav-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin: 1rem 0;
    width: 100%;
    grid-column: 1 / -1;
    border-bottom: 1px solid var(--border-primary);
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
    #scale {
      margin: 0 0.25rem;
      li {
        display: block !important;
      }
    }
  }
  @media (min-width: 1029px) {
    .footer-container {
      padding: 1rem 0;
      grid-column: 5 / span 6;
      grid-template-areas:
        "nav nav nav navR navR navR"
        "nav nav nav navR navR navR"
        "id proj proj author author techs"
        "id loc loc scale scale scale"
        "id collab collab collab rev v";
    }
    .navigation-left {
      text-align: right;
    }
  }
  :global([data-theme="dark"]) {
    .footer {
      background-color: var(--bg-darksand);
    }
    .plan-info {
      outline: 1px solid var(--border-secondary);
      h4 {
        color: var(--text-primary) !important;
      }
      p {
        color: var(--text-primary) !important;
      }
    }
    .nav-links a {
      color: var(--text-primary) !important;
    }
    .plan-info.id {
      h4 {
        color: var(--bleu-100) !important;
      }
    }
  }
</style>
