<script lang="ts">
  let { width, handleClick } = $props();
  let highlightDims = $state({ widthLeft: 0, widthRight: 0 });
  let mobile = width <= 464;
  let tablet = width > 464 && width <= 1012;
  let desktop = width > 1012;
  const axes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  const highlightAxis = (
    axis: MouseEvent & { currentTarget: HTMLLIElement }
  ) => {
    const elem = axis.currentTarget.getBoundingClientRect();
    const rightHighlight =
      document.documentElement.clientWidth - elem.x - elem.width;
    highlightDims.widthLeft = elem.x;
    highlightDims.widthRight = rightHighlight;
  };
  const unhighlightAxis = () => {
    highlightDims.widthLeft = 0;
    highlightDims.widthRight = 0;
  };
</script>

<span
  class="highlight-before"
  style="left: 0; width: {highlightDims.widthLeft}px;"
></span>
<span
  class="highlight-after"
  style="right: 0; width: {highlightDims.widthRight}px;"
></span>
<button data-theme="light" onclick={handleClick} type="button">
  <ul class="axes axes-x grainy" data-theme="light">
    {#if mobile}
      {#each axes.slice(0, 4) as axis}
        <li onmouseenter={highlightAxis} onmouseleave={unhighlightAxis}>
          {axis}
        </li>
      {/each}
    {:else if tablet}
      {#each axes.slice(0, 8) as axis}
        <li onmouseenter={highlightAxis} onmouseleave={unhighlightAxis}>
          {axis}
        </li>
      {/each}
    {:else if desktop}
      {#each axes as axis}
        <li onmouseenter={highlightAxis} onmouseleave={unhighlightAxis}>
          {axis}
        </li>
      {/each}
    {/if}
  </ul>
</button>

<style>
  button {
    display: contents;
  }
  ul {
    grid-column: 1 / -1;
    width: 100%;
    height: 12px;
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: var(--bleu-200);
    position: sticky;
    top: 0;
    z-index: 99;
    font-weight: 500;
    font-size: 10px;
    color: var(--text-secondary);
  }

  li {
    width: 100%;
    text-align: center;
    background-color: var(--bg-tertiary);
    cursor: s-resize;
  }
  li:hover {
    background-color: var(--sand-radix-600);
  }
  .highlight-before,
  .highlight-after {
    position: absolute;
    background: center center url("$lib/images/stripes-strong-2.png") repeat;
    opacity: 0.75;
    background-size: 100px 100px;
    pointer-events: none;
    z-index: 999;
    top: 0;
    bottom: 0;
  }

  li:first-child {
    grid-column-start: 2;
  }
  :global([data-theme="dark"]) {
    ul {
      background-color: var(--bleu-100) !important;
    }
    li {
      background-color: var(--bg-primary);
      color: var(--bleu-300);
      filter: brightness(0.8);
    }
    .highlight-before,
    .highlight-after {
      filter: brightness(0.3);
    }
  }
</style>
