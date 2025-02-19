<script>
  import { onMount } from "svelte";
  import "../styles.css";
  import HorizontalAxes from "$lib/components/HorizontalAxes.svelte";
  let width = $state(0);
  let height = $state(0);
  onMount(() => {
    function onResize() {
      width = document.documentElement.clientWidth;
      height = document.documentElement.clientHeight;
    }
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });
</script>

<main>
  <HorizontalAxes {width} {height} />
  <section class="hero">
    <article>
      <div>
        <h1>
          <span>{width}</span>
          <span>{height}</span>
        </h1>
      </div>
    </article>
  </section>
  <HorizontalAxes {width} {height} />
</main>

<style>
  .hero {
    height: calc(100svh - 1.5rem);
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    background-color: rgba(0, 0, 0, 0.1);
  }
  div {
    background-color: lightgray;
  }
</style>
