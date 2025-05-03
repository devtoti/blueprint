<script lang="ts">
  import Heading from "../components/Heading.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
</script>

<div class="main-content">
  <Heading
    heading="Proyectos Destacados"
    subheading="Durante los últimos +5 años he desarrollado un interés particular por el diseño UI/UX y el desarrollo frontend de manera integral. He trabajado en diversos startups de Estados Unidos y Canadá, desempeñándome primordialmente como frontend designer."
  />
  <div class="projects-container">
    <section class="preview"></section>
    <section class="cards">
      <ProjectCard
        project={{
          number: "01",
          title: "Proyecto 1",
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        }}
      />
      <ProjectCard
        project={{
          number: "02",
          title: "Proyecto 2",
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        }}
      />
      <ProjectCard
        project={{
          number: "03",
          title: "Proyecto 3",
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        }}
      />
      <ProjectCard
        project={{
          number: "04",
          title: "Proyecto 4",
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        }}
      />
    </section>
  </div>
</div>

<style>
  .main-content {
    display: contents;
  }
  .projects-container {
    display: contents;
    width: 100%;
    .preview {
      grid-column: 1 / -1;
      width: 100%;
      aspect-ratio: 16 / 9;
      background-color: var(--bg-tertiary);
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
  .projects {
    width: 100%;
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
  }
  @media (min-width: 480px) {
    .projects-container {
      grid-column: 2 / -2;
      align-items: flex-end;
    }
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
        grid-column: span 4 / -1 !important;
        padding-left: 0 !important;
      }
      .preview {
        background-clip: content-box;
        grid-column: 1 / span 6 !important;
        padding-left: 1rem !important;
        height: 100% !important;
      }
    }
  }
</style>
