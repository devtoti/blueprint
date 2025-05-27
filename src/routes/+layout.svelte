<script lang="ts">
  import "$lib/fonts/fonts.css";
  import { onMount, setContext } from "svelte";
  let { children } = $props();
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  let innerWidth = $state(0);
  let innerHeight = $state(0);
  let wnd = $state({ width: 0, height: 0 });

  $effect(() => {
    wnd.width = innerWidth;
    wnd.height = innerHeight;
  });
  setContext("WINDOW", wnd);
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<Navbar window={wnd} />
{@render children()}
<p>{innerHeight}, {innerWidth}</p>
<Footer window={wnd} />

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
