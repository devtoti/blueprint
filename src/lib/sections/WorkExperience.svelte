<script lang="ts">
  import Heading from "../components/Heading.svelte";
  import ExperienceCard from "../components/ExperienceCard.svelte";
</script>

<Heading
  heading="Experiencia Laboral"
  subheading="Durante los últimos +5 años he desarrollado un interés particular por el diseño UI/UX y el desarrollo frontend de manera integral. He trabajado en diversos startups de Estados Unidos y Canadá, desempeñándome primordialmente como frontend designer."
/>
<div class="experience-cards">
  <ExperienceCard
    experience={{
      role: "Frontend Developer",
      description: "React / Svelte / Node / CSS",
    }}
  />
  <ExperienceCard
    experience={{
      role: "UI/UX Designer",
      description: "Figma / Illustrator / Photoshop / CAD",
    }}
  />
</div>

<style>
  .experience-cards {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;
    flex-wrap: wrap;
  }
</style>
