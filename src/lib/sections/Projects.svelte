<script lang="ts">
  import "../../tokens.css";
  import Heading from "../components/Heading.svelte";
  import { dictionary } from "../dictionary";
  import NewProjectCard from "../components/ProjectCard.svelte";
  const projectData = dictionary["highlighted-projects"]
    .slice(0, -1)
    .toSorted((a, b) => a.id - b.id);
</script>

<Heading page="projects" />
<div class="projects-container">
  {#each projectData as project, index}
    <NewProjectCard
      project={{
        id: project.id,
        number: project.number,
        title: project.title,
        tags: project.tags,
        description: project.description,
        url: project.url,
        figmaUrl: project.figmaUrl,
        image: project.image,
        subheading: project.subheading,
        ix: index,
      }}
    />
  {/each}
</div>

<style>
  .projects-container {
    display: contents;
  }

  .projects-container > :global(.new-project-card:first-child) {
    grid-column: 1 / -1;
    border: 2px solid var(--border-secondary);
    box-shadow: var(--shadow-4);
  }
  @media (min-width: 1029px) {
    .projects-container {
      grid-column: 1 / -1;
      grid-row: 2 / 4;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      width: 100%;
      height: 100%;
      min-height: 720px;
    }
  }
</style>
