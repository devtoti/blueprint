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
  subheading="Este es un listado de las tecnologías y herramientas que utilizo constantemente para llevar a cabo mis proyectos de diseño y desarrollo web."
  isCentered
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
    &:hover {
      background-color: var(--bg-darksand);
    }
  }
  @media (min-width: 480px) {
    .skills-container {
      grid-column: 2 / -2;
    }
  }
  @media (min-width: 1280px) {
    .skills-container {
      grid-column: 3 / -3;
    }
  }
</style>
