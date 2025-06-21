<script lang="ts">
  import { dictionary } from "$lib/dictionary";
  import { lang } from "$lib/stores";

  let { page = "Home", text }: { page: keyof typeof dictionary; text: string } =
    $props();

  const language = $derived($lang);
</script>

{@html (dictionary[page] as any)[text][language]}
