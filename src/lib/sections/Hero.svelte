<script lang="ts">
  import MainIllustration from "$lib/images/main-illustration.svelte";
</script>

<section class="hero grainy">
  <article class="section-content hero-content">
    <div class="title">
      <h1 class="text-title barlow-extrabold">Blueprint.dev</h1>
      <h4 class="text-caption">Frontend development & design portfolio</h4>
      <p class="arc-body-1">
        I'm a frontend developer and designer with a passion for creating
        beautiful and functional web applications.
      </p>
    </div>
  </article>
  <span class="button-container">
    <div class="button-wrapper">
      <a
        href="/docs/antonio-ruiz-frontend-design-resume-jun-2025.pdf"
        class="arc-button-secondary arc-h3 invert">Curriculum</a
      >
    </div>
    <div class="button-wrapper">
      <a href="/about" class="arc-button-primary arc-h3 invert">Contáctame</a>
      <span class="square top-left"></span>
      <span class="square top-right"></span>
      <span class="square bottom-left"></span>
      <span class="square bottom-right"></span>
    </div>
  </span>
  <article class="illustration-container">
    <MainIllustration />
  </article>
</section>

<style>
  .hero {
    position: relative;
    width: 100%;
    grid-column: 1 / -1;
    background-color: var(--bg-primary);
    place-items: center;
    background-image: url("src/lib/images/iso-grid.svg");
    background-size: cover;
    background-position: center;
    padding: 4rem 0;
    .title {
      h4 {
        margin-top: 1rem;
      }
    }
  }
  .illustration-container {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1 / -1;
    width: 100%;
  }
  .section-content {
    grid-column: 2 / -2;
  }
  .button-container {
    grid-column: 2 / -2;
    width: 100%;
    grid-row: 3 /4;
    .button-wrapper {
      width: 100%;
      height: 3rem;
    }
  }
  .hero-content {
    place-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--text-primary);
    div {
      display: flex;
      flex-direction: column;
    }
    div > * {
      display: inline-block;
      text-align: center;
    }
  }
  @media (min-width: 360px) {
    .title {
      h4 {
        margin-top: 0rem !important;
      }
    }
    .hero-content :last-child {
      margin: 1rem 0 0.5rem 0;
    }
  }
  @media (min-width: 720px) {
    .hero-content {
      grid-column: 3 / -3;
    }
    .illustration-container {
      grid-column: 3 / -3;
    }
    .button-container {
      flex-direction: row;
      grid-column: 3 / -3;
    }
  }
  /* @media (min-width: 1024px) {
    .section-content {
      grid-column: 3 / span 5;
      grid-row: 1 / 2;
      place-items: start;
      place-self: end;
      width: 100%;
      * {
        text-align: left !important;
      }
    }

    .illustration-container {
      grid-column: 8 / -1;
      grid-row: 1 / 3;
    }
    .button-container {
      grid-column: 3 / span 5;
      grid-row: 2 / 3;
      place-self: start;
      margin-top: 0rem;
    }
  } */
</style>
