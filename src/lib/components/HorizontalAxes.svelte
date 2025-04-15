<script lang="ts">
  let { width, height } = $props();
  let highlightDims = $state({ widthLeft: 0, widthRight: 0 });
  const axes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  const highlightAxis = (axis: MouseEvent & { currentTarget: HTMLLIElement }) => {
    const elem = axis.currentTarget.getBoundingClientRect();
    const rightHighlight = document.documentElement.clientWidth - elem.x - elem.width;
    highlightDims.widthLeft = elem.x;
    highlightDims.widthRight = rightHighlight;
  };
  const unhighlightAxis = () => {
    highlightDims.widthLeft = 0;
    highlightDims.widthRight = 0;
  };
</script>

{#if width <= 464}
<span
  class="highlight-before"
  style="left: 0; width: {highlightDims.widthLeft}px;"
></span>
<span class="highlight-after" style="right: 0; width: {highlightDims.widthRight}px;"
></span>
  <ul class="axes axes-x">
    {#each axes.slice(0,4) as axis}
      <li onmouseenter={highlightAxis} onmouseleave={unhighlightAxis}>{axis}</li>
    {/each}
  </ul>
{:else if width > 464 && width <= 1012}
<span
  class="highlight-before"
  style="left: 0; width: {highlightDims.widthLeft}px;"
></span>
<span class="highlight-after" style="right: 0; width: {highlightDims.widthRight}px;"
></span>
  <ul class="axes axes-x">
    {#each axes.slice(0,8) as axis}
      <li onmouseenter={highlightAxis} onmouseleave={unhighlightAxis}>{axis}</li>
    {/each}
  </ul>
{:else if width > 1012}
<span
  class="highlight-before"
  style="left: 0; width: {highlightDims.widthLeft}px;"
></span>
<span class="highlight-after" style="right: 0; width: {highlightDims.widthRight}px;"
></span>
  <ul class="axes axes-x">
    {#each axes as axis}
      <li onmouseenter={highlightAxis} onmouseleave={unhighlightAxis}>{axis}</li>
    {/each}
  </ul>
{/if}

<style>
  ul {
    grid-column: 1 / -1;
    width: 100%;
    height: 12px;
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: var(--bleu-200);
    position: relative;
  }

  li {
    position: relative;
    width: 100%;
    font-size: 10px;
    text-align: center;
    background-color: var(--bg-tertiary);
  }
  li:hover {
    background-color: var(--sand-radix-600);
  }
  .highlight-before,
  .highlight-after {
    position: absolute;
    background-color: var(--bg-blueprint);
    opacity: 0.1;
    pointer-events: none;
    height: 100svh;
    z-index: 100; 
  }
  /* li:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100svh;
    background-color: var(--bg-blueprint);
  } */
  ul:last-child {
    grid-column-end: -2;
  }
  li:first-child {
    grid-column-start: 2;
  }
</style>
