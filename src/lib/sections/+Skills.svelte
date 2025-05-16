<script lang="ts">
  import BoxIllustration from "$lib/images/box-illustration.svelte";
  import Heading from "$lib/components/Heading.svelte";
  const skills = [
    "Diseño",
    "Desarrollo",
    "UX/UI",
    "Prototipos",
    "Testing",
    "Optimización",
    "Figma",
    "Adobe XD",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Adobe Acrobat",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Svelte",
  ];
</script>

{#snippet item(title: string, description: string)}
  <div class="service">
    <h5 class="arc-h5">{title}</h5>
    <p class="arc-body-2">{description}</p>
  </div>
{/snippet}
{#snippet skill(title: string)}
  <div class="skill">
    <h5 class="arc-h5">{title}</h5>
  </div>
{/snippet}
<Heading
  heading="Enfoque dual diseño y desarrollo"
  subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam?"
  alignRight
/>
<article class="skills-container">
  {#each skills as name, ix}
    {@render skill(name)}
  {/each}
</article>

<style>
  .skills-container {
    width: 100%;
    grid-column: 1 / -1;
    background-color: var(--bg-primary);
    gap: 0.25rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .skill {
    display: inline-flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0.25rem;
    background-color: var(--bg-tertiary);
    padding: 0.5rem 1rem;
    /* grid-column-start: 2; */
  }
  [class*="skills-list"] {
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
