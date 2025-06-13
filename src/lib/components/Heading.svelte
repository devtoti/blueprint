<script lang="ts">
  export let heading: string;
  export let subheading: string;
  export let alignRight: boolean = false;
  export let isCentered: boolean = false;
</script>

<article class="heading" class:alignRight class:isCentered>
  <h2 class="arc-h3">{heading}</h2>
  <h5 class="subheading arc-body-1">{subheading}</h5>
</article>

<style>
  .heading {
    grid-column: 1 / -1;
    padding: 0 1rem;
    text-align: center;
    display: block;
    margin: 1rem 0;
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
