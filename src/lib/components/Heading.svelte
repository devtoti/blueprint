<script lang="ts">
  export let heading: string;
  export let subheading: string;
  export let alignRight: boolean = false;
</script>

<article class="heading" class:alignRight>
  <h2 class="arc-h2">{heading}</h2>
  <h5 class="arc-body-1">{subheading}</h5>
</article>

<style>
  .heading {
    grid-column: 1 / -1;
    padding: 0 1rem;
    text-align: center;
    display: block;
    margin: 1rem 0;
  }
  @media (min-width: 480px) {
    .heading {
      grid-column: 2 / -2;
    }
  }
  @media (min-width: 1029px) {
    .heading {
      grid-column: 1 / span 5;
      text-align: left;
    }
    .alignRight {
      grid-column: span 5 / -1;
      text-align: right;
    }
  }
</style>
