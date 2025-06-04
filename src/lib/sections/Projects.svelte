<script lang="ts">
  import Heading from "../components/Heading.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  import ActiveProject from "../components/ActiveProject.svelte";
  import { projects as projectData } from "../utils/projects";
  let activeProject = $state(projectData[1]);
  const projects = $state(projectData.slice(0, -1));
</script>

{#snippet bullet(info: { title: string; description: string })}
  <div class="bullet">
    <h3 class="arc-h4">{info.title}</h3>
    <p class="arc-body-1">{info.description}</p>
  </div>
{/snippet}
<article class="projects-banner">
  <h3 class="arc-h4 color-invert">Proyectos Destacados</h3>
</article>
<div class="main-content">
  <!-- <Heading
    heading="Proyectos Destacados"
    subheading="Durante los últimos +5 años he desarrollado un interés particular por el diseño UI/UX y el desarrollo frontend de manera integral. He trabajado en diversos startups de Estados Unidos y Canadá, desempeñándome primordialmente como frontend designer."
    alignRight
  /> -->
  <div class="projects-container">
    <section class="preview-container" id="preview-container">
      <ActiveProject project={activeProject} />
      <div class="preview" id="preview"></div>
      <article class="bullets">
        {@render bullet({
          title: "Lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ipsa! Aut vero temporibus impedit itaque? Magni",
        })}
        {@render bullet({
          title: "Lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ipsa! Aut vero temporibus impedit itaque? Magni",
        })}
        {@render bullet({
          title: "Lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ipsa! Aut vero temporibus impedit itaque? Magni",
        })}
      </article>
    </section>
    <section class="cards">
      {#each projects as project, index}
        <ProjectCard
          bind:activeProject
          isActive={activeProject.id === index + 1}
          project={{
            id: project.id,
            number: project.number,
            title: project.title,
            description: project.description,
            tags: project.tags,
          }}
        />
      {/each}
    </section>
  </div>
</div>

<style>
  .main-content {
    display: contents;
  }
  .projects-banner {
    position: relative;
    grid-column: 1 / -1;
    width: 100%;
    text-align: center;
    height: 2.5rem;
    background-color: var(--bleu-500);
    h3 {
      position: absolute;
      inset: 0;
      margin: auto;
      height: fit-content;
    }
  }
  .projects-container {
    grid-column: 1 / -1;
    width: 100%;
    .preview-container {
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .preview {
        margin: 1rem 0;
        width: 100%;
        aspect-ratio: 1 / 1;
        background-color: var(--bleu-200);
      }
    }
    .cards {
      grid-column: 1 / -1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 0 1rem;
    }
  }
  .bullets {
    display: none;
  }
  @media (min-width: 480px) {
    .cards {
      display: grid !important;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    #preview {
      aspect-ratio: 5 / 3;
    }
  }
  @media (min-width: 1024px) {
    .projects-container {
      display: contents !important;
    }
    .cards {
      display: flex !important;
      align-items: flex-end !important;
      gap: 1rem;
      grid-row: 2 / span 1;
      grid-column: span 4 / -1 !important;
      padding-left: 0 !important;
    }
    #preview-container {
      display: flex;
      grid-column: 1 / span 6;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
      justify-content: flex-start;
    }
    /* #preview {
      aspect-ratio: 16 / 9;
    } */
    .bullets {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 1rem;
      padding: 0 1rem;
      margin-top: auto;
    }
  }
</style>
