<script lang="ts">
  import { Theme } from "@radix-ui/themes";
  let { children } = $props();
</script>

<Theme class="radix-themes">
  {@render children?.()}
</Theme>
