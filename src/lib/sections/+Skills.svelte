<script lang="ts">
  import BoxIllustration from "$lib/images/box-illustration.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import { skills } from "$lib/utils/skills";
  let results: Record<string, number> = {};
  let activeTag = $state<string>("");
  let mainTags = skills;
  let relevantTags = $state<string[]>([]);
  const mappedSkills = () => {
    skills.forEach((skill) => {
      skill.tags.forEach((tag) => {
        const lowerTag = tag.toLowerCase();
        if (!results[lowerTag]) {
          results[lowerTag] = 1;
        } else {
          results[lowerTag]++;
        }
      });
    });
    return results;
  };
  const handleHover = (e: MouseEvent) => {
    const currSkill = (e.target as HTMLElement).innerText.toLowerCase();
    const isValidSkill =
      skills.filter((s) => s.name.toLowerCase().includes(currSkill)).length > 0;
    if (isValidSkill) {
      const tagList = skills.filter((s) =>
        s.name.toLowerCase().includes(currSkill)
      );
      activeTag = currSkill;
      relevantTags = tagList[0].tags;
    }
    return [];
  };
  const handleFocus = (e: FocusEvent) => {
    return null;
  };
  const handleLeave = (e: MouseEvent) => {
    activeTag = "";
    relevantTags = [];
  };
  const isMainSkill = (tag: string) =>
    skills.some((s) => s.name.toLowerCase() == tag);
</script>

{#snippet item(title: string, description: string)}
  <div class="service">
    <h5 class="arc-h5">{title}</h5>
    <p class="arc-body-2">{description}</p>
  </div>
{/snippet}
{#snippet skill(type: { name: string })}
  <button
    class="skill"
    onmouseover={handleHover}
    onfocus={handleFocus}
    onmouseleave={handleLeave}
    class:isRelevant={relevantTags.filter(
      (tag) => tag.toLowerCase() === type.name.toLowerCase()
    ).length > 0}
    class:isActive={activeTag === type.name.toLowerCase()}
    class:isMain={skills.some((s) => s.name.toLowerCase() == type.name)}
  >
    <h5 class="arc-h5 skill-name">{type.name}</h5>
    {#if isMainSkill(type.name)}
      <span></span><span></span><span></span><span></span>
    {/if}
  </button>
{/snippet}
<Heading
  heading="Enfoque dual desarrollo y diseño"
  subheading="Este es un listado de las tecnologías y herramientas que utilizo constantemente para llevar a cabo mis proyectos de diseño y desarrollo web."
  isCentered
/>
<article class="skills-container">
  {#each Object.keys(mappedSkills()) as type}
    {@render skill({ name: type })}
  {/each}
</article>

<style>
  .skills-container {
    width: 100%;
    grid-column: 1 / -1;
    background-color: var(--bg-primary);
    gap: 0.25rem;
    gap: 0.1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .skill {
    all: unset;
    position: relative;
    display: inline-flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0.25rem;
    background-color: var(--bg-tertiary);
    padding: 0.5rem 1rem;
    padding: 0.25rem 0.5rem;
    transition: background-color 0.5s ease-in-out;
    &:hover {
      background-color: var(--sand-radix-700);
    }
  }
  .skill-name {
    pointer-events: none;
  }
  .skill.isRelevant {
    background-color: var(--bleu-100);
  }
  .skill.isActive {
    background-color: var(--bleu-300);
  }
  .skill.isMain.isActive {
    h5 {
      color: var(--white) !important;
    }
  }
  .skill.isMain {
    span {
      position: absolute;
    }
    span:first-of-type {
      position: absolute;
      inset: 0 -5%;
      width: 110%;
      height: 1px;
      border-top: 1px solid var(--border-tertiary);
    }
    span:nth-of-type(2) {
      position: absolute;
      inset: -10% 0 0;
      width: 1px;
      height: 120%;
      border-left: 1px solid var(--border-tertiary);
    }
    span:nth-of-type(3) {
      position: absolute;
      inset: auto 0 0 -5%;
      width: 110%;
      height: 1px;
      border-bottom: 1px solid var(--border-tertiary);
    }
    span:last-of-type {
      position: absolute;
      inset: -10% 0 0 auto;
      width: 1px;
      height: 120%;
      border-left: 1px solid var(--border-tertiary);
    }
  }
  @media (min-width: 480px) {
    .skills-container {
      grid-column: 2 / -2;
    }
    .skill {
      padding: 0.5rem 1rem;
    }
    .skills-container {
      gap: 0.5rem;
    }
  }
  @media (min-width: 1280px) {
    .skills-container {
      grid-column: 3 / -3;
    }
  }
</style>
