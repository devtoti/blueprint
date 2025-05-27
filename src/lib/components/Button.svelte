<script lang="ts">
  let { text = "Click aquí", href = "/" } = $props();
</script>

<div class="button-wrapper">
  <a {href} class="arc-button-secondary arc-h3 invert">{text}</a>
</div>

<style>
  .button-wrapper {
    width: 100%;
    height: 2.5rem;
  }
</style>
