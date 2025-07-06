<script lang="ts">
  import "../../tokens.css";
  import ProjectCard from "../components/ProjectCard.svelte";
  import ActiveProject from "../components/ActiveProject.svelte";
  import Text from "../components/Text.svelte";
  import { dictionary } from "../dictionary";
  const projectData = dictionary["highlighted-projects"]
    .slice(0, -1)
    .toSorted((a, b) => a.id - b.id);
  let activeProject = $state(projectData[0]);
</script>

<article class="projects-banner">
  <h3 class="arc-h4 color-invert">
    <Text section="projects-banner" text="title" />
  </h3>
</article>
<div class="main-content">
  <div class="projects-container">
    <ActiveProject project={activeProject} ix={activeProject.id - 1} />
    {#each projectData as project, index}
      <ProjectCard
        bind:activeProject
        isActive={activeProject.id === index + 1}
        project={{
          id: project.id,
          number: project.number,
          title: project.title,
          tags: project.tags,
          description: project.description,
          url: project.url,
          figmaUrl: project.figmaUrl,
          image: project.image,
          ix: index,
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
    background: linear-gradient(to right, var(--bleu-300), var(--bleu-500));
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
