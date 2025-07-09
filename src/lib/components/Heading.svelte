<script lang="ts">
  let {
    page,
    alignRight,
    isCentered,
  }: { page: string; alignRight?: boolean; isCentered?: boolean } = $props();
  import Text from "$lib/components/Text.svelte";
</script>

<article class="heading" class:alignRight class:isCentered>
  <h2 class="arc-h3">
    <Text section={page} text="heading" />
  </h2>
  <h3 class="subheading arc-body-1">
    <Text section={page} text="subheading" />
  </h3>
</article>

<style>
  .heading {
    grid-column: 1 / -1;
    padding: 0 1rem;
    text-align: center;
    display: block;
    margin: 1rem 0;
    color: var(--text-tertiary);
  }
  .isCentered {
    grid-column: 1 / -1 !important;
    text-align: center !important;
  }
  .subheading {
    max-width: 70ch;
  }
  @media (min-width: 480px) {
    .heading {
      text-align: left;
      grid-column: 1 / span 4;
    }
    .alignRight {
      grid-column: span 4 / -1;
      text-align: right;
    }
  }

  @media (min-width: 1024px) and (max-width: 1920px) {
    .heading {
      grid-column: 2 / span 4;
      padding: 0;
    }
    .alignRight {
      grid-column: span 4 / -2;
    }
  }
</style>
