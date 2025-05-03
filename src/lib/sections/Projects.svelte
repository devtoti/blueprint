<script lang="ts">
  import Heading from "../components/Heading.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  import ActiveProject from "../components/ActiveProject.svelte";
  import { projects as projectData } from "../utils/projects";
  let activeProject = $state(projectData[0]);
  const projects = $state(projectData.toSpliced(0, -1));
</script>

<div class="main-content">
  <Heading
    heading="Proyectos Destacados"
    subheading="Durante los últimos +5 años he desarrollado un interés particular por el diseño UI/UX y el desarrollo frontend de manera integral. He trabajado en diversos startups de Estados Unidos y Canadá, desempeñándome primordialmente como frontend designer."
  />
  <div class="projects-container">
    <section class="preview-container" id="projects-container">
      <ActiveProject project={activeProject} />
      <div class="preview"></div>
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

  .projects-container {
    display: contents;
    grid-column: 1 / -1;
    width: 100%;
    background-color: var(--bleu-50);
    .preview-container {
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .preview {
        margin: 1rem 0;
        width: 100%;
        aspect-ratio: 16 / 9;
        background-color: var(--bleu-200);
      }
    }
    .preview-container {
      display: contents;
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
  @media (min-width: 480px) {
    .cards {
      display: grid !important;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    @media (min-width: 1024px) {
      .cards {
        display: flex !important;
        align-items: flex-end !important;
        gap: 1rem;
        grid-row: 2 / span 1;
        grid-column: span 4 / -1 !important;
        padding-left: 0 !important;
      }
      .preview-container {
        display: flex !important;
        grid-column: 1 / span 6 !important;
        flex-direction: column;
        width: 100%;
        align-items: flex-start !important;
        justify-content: flex-start !important;
      }

      /* .preview {
        background-clip: content-box;
        grid-column: 1 / span 6 !important;
        padding-left: 1rem !important;
        height: 100% !important;
      } */
    }
  }
</style>
