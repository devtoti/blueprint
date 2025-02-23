<script lang="ts">
  import { onMount, setContext } from "svelte";
  let { children } = $props();
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  let wnd = $state({ width: 0, height: 0 });
  setContext("WINDOW", wnd);
  onMount(() => {
    function onResize() {
      wnd.width = document.documentElement.clientWidth;
      wnd.height = document.documentElement.clientHeight;
    }
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });
</script>

<!-- <Navbar {width} {height} /> -->
{@render children()}
<!-- <Footer {width} {height} /> -->
