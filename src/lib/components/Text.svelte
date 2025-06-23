<script lang="ts">
  import { dictionary } from "$lib/dictionary";
  import { lang } from "$lib/stores";

  let {
    section = "Home",
    text,
    sectionIx,
    textIx,
  }: {
    section: string;
    text: string;
    sectionIx?: number;
    textIx?: number;
  } = $props();

  const language = $derived($lang);
  
</script>

{#if sectionIx !== undefined && textIx !== undefined}
  {@html ((dictionary as any)[section] as any)[sectionIx][text][textIx][
    language
  ]}
{:else if sectionIx !== undefined}
  {@html ((dictionary as any)[section] as any)[sectionIx][text][language]}
{:else if textIx !== undefined}
  {@html ((dictionary as any)[section] as any)[text][textIx][language]}
{:else}
  {@html ((dictionary as any)[section] as any)[text][language]}
{/if}
