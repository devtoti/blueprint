<script>
  let { width, height } = $props();
</script>

{#if width <= 480}
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
  </ul>
{:else if width > 480 && width <= 720}
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>F</li>
    <li>G</li>
    <li>H</li>
    <li>I</li>
  </ul>
{:else}
  <ul>
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
    grid-column: 1 / 13;
    width: 100%;
    display: contents;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    flex: 1;
    height: 1.5rem;
    width: 100%;
    text-align: center;
    outline: 1px solid gray;
  }
  ul:last-child {
    grid-column-end: -1;
  }
  li:first-child {
    grid-column-start: 1;
  }
</style>
