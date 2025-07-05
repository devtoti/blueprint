<script lang="ts">
  import HoverMeTop from "$lib/images/hover-container.svelte";
  import HoverMeBottom from "$lib/images/hover-container-bottom.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import { skills } from "$lib/utils/skills";
  const mappedSkills = () => {
    const results: Record<string, number> = {};
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
  let results: Record<string, number> = $state(mappedSkills());
  let activeTag = $state<string>("");
  let relevantTags = $state<string[]>([]);
  let activeTimeout = $state<number | null>(null);

  const handleClick = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const target = e.currentTarget as HTMLElement;
    const rawText = target.innerText;

    const currSkill = rawText
      .replace(/[^\w\s\/]/g, "")
      .trim()
      .toLowerCase();

    const matchingSkills = skills.filter((skill) =>
      skill.tags.some((tag) => tag.toLowerCase() === currSkill)
    );

    if (matchingSkills.length > 0) {
      const allTags = matchingSkills.flatMap((skill) => skill.tags);
      activeTag = currSkill;
      relevantTags = allTags;
    }
    if (activeTimeout) clearTimeout(activeTimeout);
    activeTimeout = setTimeout(() => {
      handleLeave(e);
    }, 4000);
  };

  const handleSimpleClick = (e: MouseEvent | TouchEvent) => {
    const target = e.currentTarget as HTMLElement;
    const rawText = target.innerText;

    const currSkill = rawText
      .replace(/[^\w\s\/]/g, "")
      .trim()
      .toLowerCase();

    const matchingSkills = skills.filter((skill) =>
      skill.tags.some((tag) => tag.toLowerCase() === currSkill)
    );

    if (matchingSkills.length > 0) {
      const allTags = matchingSkills.flatMap((skill) => skill.tags);
      activeTag = currSkill;
      relevantTags = allTags;
    }
  };

  const handleFocus = (e: FocusEvent) => {
    return null;
  };
  const handleLeave = (e: MouseEvent | TouchEvent) => {
    activeTag = "";
    relevantTags = [];
  };
  const isMainSkill = (tag: string) =>
    skills.some((s) => s.name.toLowerCase() === tag.toLowerCase());
</script>

{#snippet skill(type: { name: string })}
  {@const isRelevantValue = relevantTags.some(
    (tag) => tag.toLowerCase() === type.name.toLowerCase()
  )}
  {@const isActiveValue = activeTag === type.name.toLowerCase()}
  {@const isMainValue = skills.some(
    (s) => s.name.toLowerCase() === type.name.toLowerCase()
  )}

  <button
    class="skill"
    onmouseenter={handleClick}
    ontouchstart={handleSimpleClick}
    onmousedown={handleSimpleClick}
    onclick={handleSimpleClick}
    onfocus={handleFocus}
    onmouseleave={handleLeave}
    ontouchend={handleLeave}
    class:isRelevant={isRelevantValue}
    class:isActive={isActiveValue}
    class:isMain={isMainValue}
  >
    <h5 class="arc-h5 skill-name">{type.name}</h5>
    {#if isMainValue}
      <span></span><span></span><span></span><span></span>
    {/if}
  </button>
{/snippet}
<Heading page="skills" isCentered />
<article class="skills-container">
  <div class="hover-me-top-container">
    <HoverMeTop />
  </div>
  {#each Object.keys(results) as type}
    {@render skill({ name: type })}
  {/each}
  <div class="hover-me-bottom-container">
    <HoverMeBottom />
  </div>
</article>

<style>
  .skills-container {
    width: 100%;
    position: relative;
    grid-column: 1 / -1;
    gap: 0.25rem;
    gap: 0.1rem;
    display: flex;
    margin: 6rem 0 2rem 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .hover-me-top-container {
    position: absolute;
    top: -6.5rem;
    pointer-events: none;
    left: -0.25rem;
    width: 12rem;
  }
  .hover-me-bottom-container {
    position: absolute;
    bottom: -2rem;
    right: 0.25rem;
    pointer-events: none;
    width: 12rem;
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
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    touch-action: manipulation;
    cursor: pointer;
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
      grid-column: 1 / -1;
    }
    .hover-me-top-container,
    .hover-me-bottom-container {
      width: 8rem;
    }
    .skill {
      padding: 0.5rem 1rem;
    }
    .skills-container {
      gap: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    .skills-container {
      grid-column: 2 / -2;
    }
  }
  @media (min-width: 1280px) {
    .skills-container {
      grid-column: 3 / -3;
    }
    .hover-me-top-container,
    .hover-me-bottom-container {
      width: 12rem;
    }
    .hover-me-top-container {
      left: -1rem;
    }
    .hover-me-bottom-container {
      right: -1rem;
    }
  }
  :global([data-theme="dark"]) {
    .skill {
      background-color: var(--bg-secondary);
      &:hover {
        background-color: var(--sand-radix-500);
      }
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
    span {
      border-color: var(--border-secondary) !important;
    }
  }
</style>
