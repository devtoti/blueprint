<script lang="ts">
  let { text = "Click aquí", href = "/" } = $props();
</script>

<div class="button-wrapper">
  <a {href} class="arc-button-primary arc-h3 button-text invert">
    {text}
  </a>
  <span class="square top-left"></span>
  <span class="square top-right"></span>
  <span class="square bottom-left"></span>
  <span class="square bottom-right"></span>
</div>

<style>
  .button-wrapper {
    width: 100%;
    height: 2.5rem;
    position: relative;
  }
</style>
