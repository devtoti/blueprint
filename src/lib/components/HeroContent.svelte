<script lang="ts">
  let {
    title,
    subheading,
    description,
    buttonOneText,
    buttonOneHref,
    buttonTwoText,
    buttonTwoHref,
    bgPattern = "iso-grid",
    HeroImage,
  } = $props();
  import PaperBox from "$lib/images/paper-box.svelte";
  import Button from "$lib/components/Button.svelte";
</script>

<section
  class="hero-container"
  style="background: #f9f9f8 url('src/lib/images/{bgPattern}.svg');"
>
  <section class="contact-page grainy hero-section">
    <article class="section-content hero-content">
      <div class="title">
        <h1 class="text-title barlow-extrabold">{title}</h1>
        <h4 class="text-caption caption">{subheading}</h4>
      </div>
      <div class="subheader">
        <p class="text-subheader arc-body-1">{description}</p>
      </div>
    </article>
    <article class="hero-img">
      <HeroImage />
    </article>
    <article class="button-container">
      <Button text={buttonOneText} href={buttonOneHref} primary />
      <Button text={buttonTwoText} href={buttonTwoHref} secondary invert />
    </article>
  </section>
</section>

<style>
  .hero-img {
    max-height: 25rem;
  }
  .hero-container {
    width: 100%;
    grid-column: 1 / -1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .hero-section {
    border-top: 0;
    border-bottom: 0;
    grid-column: 2 / -2;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }
  .title {
    h1 {
      padding-bottom: 0.5rem;
    }
    h4 {
      padding-bottom: 1rem;
    }
  }
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .contact-page {
    min-height: 75svh;
    padding: 2rem 0;
  }
  .text-subheader {
    margin-top: 0.5rem;
    max-width: 60ch;
  }
  @media (min-width: 720px) {
    .hero-section {
      grid-column: 3 / -3;
      display: grid;
      grid-template-columns: 1fr 1fr;
      .hero-content {
        grid-column: 1 / span 1;
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 1rem;
        align-self: flex-end;
        justify-content: center;
        justify-self: flex-start;
      }

      .hero-img {
        grid-column: 2 / span 1;
        grid-row: 1 / 3;
        height: 100%;
      }
      .button-container {
        grid-column: 1 / span 1;
        grid-row: 2 / span 1;
        align-self: flex-start;
        justify-self: flex-start;
        max-width: 20rem;
      }
    }
    @media (min-width: 1024px) {
      .button-container {
        flex-direction: row;
        max-width: 100% !important;
      }
      .hero-section {
        grid-column: 4 / -4;
      }
    }
  }
</style>
