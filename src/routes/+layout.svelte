<script lang="ts">
  import "$lib/fonts/fonts.css";
  import { onMount, setContext } from "svelte";
  let { children, data } = $props();
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import HorizontalAxes from "$lib/components/HorizontalAxes.svelte";
  let innerWidth = $state(0);
  let innerHeight = $state(0);
  let wnd = $state({ width: 0, height: 0 });
  $effect(() => {
    wnd.width = innerWidth;
    wnd.height = innerHeight;
  });
  setContext("WINDOW", wnd);
  onMount(() => {
    const parsedUrl = new URL(window.location.href);
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<HorizontalAxes width={innerWidth} height={innerHeight} />
<Navbar />
{@render children()}
<p>{innerWidth}, {innerHeight}</p>
<Footer window={wnd} />
<HorizontalAxes width={innerWidth} height={innerHeight} />

<style>
  p {
    position: fixed;
    background-color: white;
    padding: 0.25rem;
    bottom: 0;
    right: 0;
    z-index: 100;
  }
</style>
