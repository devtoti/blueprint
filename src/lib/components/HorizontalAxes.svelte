<script lang="ts">
  let { width, height } = $props();
  let highlightDims = $state({ widthLeft: 0, widthRight: 0 });
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

{#if width <= 464}
  <span
    class="highlight-before"
    style="left: 0; width: {highlightDims.widthLeft}px;"
  ></span>
  <span
    class="highlight-after"
    style="right: 0; width: {highlightDims.widthRight}px;"
  ></span>
  <ul class="axes axes-x grainy">
    {#each axes.slice(0, 4) as axis}
      <li onmouseenter={highlightAxis} onmouseleave={unhighlightAxis}>
        {axis}
      </li>
    {/each}
  </ul>
{:else if width > 464 && width <= 1012}
  <span
    class="highlight-before"
    style="left: 0; width: {highlightDims.widthLeft}px;"
  ></span>
  <span
    class="highlight-after"
    style="right: 0; width: {highlightDims.widthRight}px;"
  ></span>
  <ul class="axes axes-x grainy">
    {#each axes.slice(0, 8) as axis}
      <li onmouseenter={highlightAxis} onmouseleave={unhighlightAxis}>
        {axis}
      </li>
    {/each}
  </ul>
{:else if width > 1012}
  <span
    class="highlight-before"
    style="left: 0; width: {highlightDims.widthLeft}px;"
  ></span>
  <span
    class="highlight-after"
    style="right: 0; width: {highlightDims.widthRight}px;"
  ></span>
  <ul class="axes axes-x grainy">
    {#each axes as axis}
      <li onmouseenter={highlightAxis} onmouseleave={unhighlightAxis}>
        {axis}
      </li>
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
</style>
