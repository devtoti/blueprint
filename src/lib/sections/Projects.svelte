<script lang="ts">
  import Heading from "../components/Heading.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  import ActiveProject from "../components/ActiveProject.svelte";
  import { projects as projectData } from "../utils/projects";
  let activeProject = $state(projectData[0]);
  const projects = $state(projectData.slice(0, -1));
</script>

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
    <ActiveProject project={activeProject} />
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
          bullets: project.bullets,
          url: project.url,
          figmaUrl: project.figmaUrl,
          image: project.image,
        }}
      />
    {/each}
  </div>
</div>

<style>
  .main-content {
    display: contents;
  }
  .projects-banner {
    position: relative;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
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
    display: contents;
  }
  @media (min-width: 1024px) {
    .projects-container {
      display: contents !important;
    }
  }
</style>
