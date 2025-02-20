<script lang="ts">
  import { onMount } from "svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import HorizontalAxes from "$lib/components/HorizontalAxes.svelte";
  let { children, data } = $props();
  let width = $state(0);
  let height = $state(0);
  let grid = $state<HTMLElement | null>(null);
  onMount(() => {
    grid = document.querySelector("main");
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

<Navbar {width} {height} />
{@render children()}
<Footer {width} {height} />
