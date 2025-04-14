<script>
  let { width, height } = $props();
</script>

{#if width <= 464}
  <ul class="axes axes-x">
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
  </ul>
{:else if width > 464 && width <= 1012}
  <ul class="axes axes-x">
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>F</li>
    <li>G</li>
    <li>H</li>
  </ul>
{:else if width > 1012}
  <ul class="axes axes-x">
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>F</li>
    <li>G</li>
    <li>H</li>
    <li>I</li>
    <li>J</li>
    <li>K</li>
    <li>L</li>
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
  }

  li {
    width: 100%;
    font-size: 10px;
    text-align: center;
    background-color: var(--bg-tertiary);
  }
  ul:last-child {
    grid-column-end: -2;
  }
  li:first-child {
    grid-column-start: 2;
  }
</style>
