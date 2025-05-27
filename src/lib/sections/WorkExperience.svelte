<script lang="ts">
  import Heading from "../components/Heading.svelte";
  import ExperienceCard from "../components/ExperienceCard.svelte";
  import type { SvelteHTMLElements } from "svelte/elements";
  type Props = SvelteHTMLElements["ExperienceCard"];
</script>

<Heading
  heading="Experiencia Laboral"
  subheading="Durante los últimos +5 años he desarrollado un interés particular por el diseño UI/UX y el desarrollo frontend de manera integral. He trabajado en diversos startups de Estados Unidos y Canadá, desempeñándome primordialmente como frontend designer."
  alignRight
/>

{#snippet card(
  ExperienceCard: Props,
  data: {
    experience: {
      role: string;
      description: string;
    };
    design: boolean;
  }
)}
  <article class="floor-plan-1">
    <div class="north-facade">
      <div class="wall-corner" style="transform: rotate(270deg);"></div>
      <div class="wall-middle"></div>
      <div class="wall-end"></div>
      <div class="void"></div>
      <div class="wall-end" style="transform: rotate(180deg);"></div>
      <div class="wall-middle" style="transform: rotate(180deg);"></div>
      <div class="wall-corner"></div>
    </div>
    <div class="middle-facade">
      <div class="west-facade" style="grid-row: 1 / 2;">
        <div class="wall-middle vertical"></div>
        <div class="wall-end vertical"></div>
        <div class="void"></div>
        <div class="wall-end vertical flip"></div>
        <div class="wall-middle vertical"></div>
      </div>
      <div class="space" id="space-container" style="grid-row: 1 / 2;">
        <div class="experience-card-container">
          <ExperienceCard experience={data.experience} design={data.design} />
        </div>
      </div>
      <div class="east-facade" style="grid-row: 1 / 2;">
        <div class="wall-middle vertical"></div>
        <div class="wall-end vertical"></div>
        <div class="void"></div>
        <div class="wall-end vertical flip"></div>
        <div class="wall-middle vertical"></div>
      </div>
    </div>
    <div class="south-facade">
      <div class="wall-corner" style="transform: rotate(180deg);"></div>
      <div class="wall-middle"></div>
      <div class="wall-end"></div>
      <div class="void"></div>
      <div class="wall-end" style="transform: rotate(180deg);"></div>
      <div class="wall-middle" style="transform: rotate(180deg);"></div>
      <div class="wall-corner" style="transform: rotate(90deg);"></div>
    </div>
  </article>
{/snippet}

<div class="experience-cards">
  {@render card(ExperienceCard, {
    experience: {
      role: "Frontend Developer",
      description: "React / Svelte / Node / CSS",
    },
    design: false,
  })}
  {@render card(ExperienceCard, {
    experience: {
      role: "UI/UX Designer",
      description: "Figma / Illustrator / Photoshop / CAD",
    },
    design: true,
  })}
</div>

<style>
  .floor-plan-1 {
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease-in-out;
  }
  .void {
    flex-grow: 1;
    background-color: var(--bleu-200) !important;
  }
  div[class*="wall-"] {
    min-width: 16px;
    min-height: 16px;
    background: repeating-linear-gradient(
      45deg,
      var(--bleu-200),
      var(--bleu-200) 1px,
      var(--bleu-300) 1px,
      var(--bleu-300) 2px
    );
    background-color: var(--bleu-200);
    border: 2px solid var(--bleu-50);
    -moz-box-shadow:
      1px 0 0 var(--bleu-400),
      0 1px 0 var(--bleu-400),
      0 -1px 0 var(--bleu-400),
      -1px 0 0 var(--bleu-400);
    -webkit-box-shadow:
      1px 0 0 var(--bleu-400),
      0 1px 0 var(--bleu-400),
      0 -1px 0 var(--bleu-400),
      -1px 0 0 var(--bleu-400);
    box-shadow:
      1px 0 0 var(--bleu-400),
      0 1px 0 var(--bleu-400),
      0 -1px 0 var(--bleu-400),
      -1px 0 0 var(--bleu-400);
  }
  div[class*="wall"]::after {
    content: "";
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid var(--bleu-700);
  }
  .floor-plan-1 {
    display: grid;
    grid-template-rows: 18px 1fr 18px;
  }
  .wall-end {
    position: relative;
    width: 100% !important;
    background-color: var(--bleu-200);
    border: 2px solid var(--bleu-50);
    border-left: none !important;
    box-shadow: none !important;
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow:
      1px 0 0 var(--bleu-400),
      0 1px 0 var(--bleu-400),
      0 -1px 0 var(--bleu-400) !important;
  }
  .wall-end::after {
    border-left: none !important;
  }
  .wall-middle {
    position: relative;
    width: 100% !important;
    background-color: var(--bleu-200);
    border-left: none !important;
    border-right: none !important;
    box-shadow: none !important;
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow:
      0 1px 0 var(--bleu-400),
      0 -1px 0 var(--bleu-400) !important;
  }
  .wall-middle::after {
    border-right: none !important;
    border-left: none !important;
  }
  .vertical {
    box-shadow:
      1px 0 0 var(--bleu-400),
      -1px 0 0 var(--bleu-400) !important;
    border: 2px solid var(--bleu-50) !important;
    border-top: none !important;
    border-bottom: none !important;
  }
  .vertical::after {
    border: 2px solid var(--bleu-700) !important;
    border-top: none !important;
    border-bottom: none !important;
  }
  .wall-end.vertical {
    box-shadow:
      1px 0 0 var(--bleu-400),
      -1px 0 0 var(--bleu-400),
      0 1px 0 var(--bleu-400) !important;
    border: 2px solid var(--bleu-50) !important;
    border-top: none !important;
  }
  .flip {
    transform: rotate(180deg);
  }
  .wall-end.vertical::after {
    border-bottom: 2px solid var(--bleu-700) !important;
  }
  .wall-corner {
    position: relative;
    border: 2px solid var(--bleu-50) !important;
    border-left: none !important;
    border-bottom: none !important;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow:
      1px 0 0 var(--bleu-400),
      0 -1px 0 var(--bleu-400) !important;
  }
  .wall-corner::after {
    border: 2px solid var(--bleu-700) !important;
    border-bottom: none !important;
    border-left: none !important;
  }
  .wall-corner::before {
    content: "";
    position: absolute;
    top: calc(100% - 4px);
    left: 0;
    z-index: 1;
    width: 2px;
    height: 2px;
    border: 2px solid var(--bleu-700) !important;
    border-bottom: none !important;
    border-left: none !important;
  }
  .north-facade,
  .south-facade {
    width: 100%;
    display: grid;
    grid-template-columns: 18px repeat(2, 1fr) 3fr repeat(2, 1fr) 18px;
    gap: 0;
  }
  .middle-facade {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 18px 1fr 18px;
    grid-template-rows: 1fr;
    gap: 0px;
    min-height: 0;
  }
  .west-facade,
  .east-facade {
    display: flex;
    gap: 0;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    & .wall-middle,
    & .wall-end {
      flex-grow: 1;
    }
    & .void {
      flex-grow: 5;
      width: 100% !important;
    }
  }
  #space-container {
    position: relative;
    transform-origin: center;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    min-height: 0;
    overflow: visible;
    & :first-child {
      width: 100%;
      height: auto;
      min-height: 0;
    }
  }
  .experience-cards {
    width: 100%;
    height: auto;
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .floor-plan-1 {
    height: fit-content;
    width: auto;
    background-color: var(--bleu-50);
    transition: height 2s ease-in-out;
  }
</style>
