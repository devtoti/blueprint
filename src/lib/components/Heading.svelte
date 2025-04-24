<script lang="ts">
  export let heading: string;
  export let subheading: string;
  export let alignRight: boolean = false;
</script>

<article class="heading" class:alignRight>
  <h2>{heading}</h2>
  <h5>{subheading}</h5>
</article>

<style>
  .heading {
    grid-column: 2 / -2;
    text-align: center;
    h2 {
      font-size: 1rem;
      margin-top: 1rem;
      font-family: "Barlow", sans-serif;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--text-primary);
    }
    h5 {
      padding-top: 0.5rem;
      font-size: 1rem;
      font-weight: 400;
      color: var(--text-secondary);
    }
  }
  @media (min-width: 480px) {
    .heading {
      grid-column: 3 / -3;
    }
  }
  @media (min-width: 1029px) {
    .heading {
      grid-column: 2 / span 6;
      text-align: left;
    }
    .alignRight {
      grid-column: 8 / -2;
      text-align: right;
    }
  }
</style>
