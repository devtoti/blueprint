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
    grid-column: 2 / -2;
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    height: 1.5rem;
    width: 100%;
    text-align: center;
    outline: 1px solid gray;
  }
  ul:last-child {
    grid-column-end: -2;
  }
  li:first-child {
    grid-column-start: 2;
  }
</style>
