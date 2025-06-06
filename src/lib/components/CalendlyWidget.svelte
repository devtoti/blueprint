<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
  });
</script>

<div
  class="calendly-inline-widget"
  data-url="https://calendly.com/devtoti/30min?hide_gdpr_banner=1"
  style="min-width:320px;height:700px;"
></div>
