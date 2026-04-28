<script>
  import { theme } from "$lib/stores";
  let { width = 100, y, w, startEnd = 2, invert = false, children } = $props();
  let clientWidth = $state(0);
  const color = $derived($theme !== "dark" ? "#ECECEB" : "#111110");
  // `width`, `y`, and/or `w` can be temporarily `undefined`/`NaN` during first
  // render or hydration. SVG `points` can't contain NaN, so we always render
  // the SVG with safe fallback values until real measurements arrive.
  const widthSafe = $derived(Number.isFinite(width) ? width : 100);
  const ySafe = $derived(Number.isFinite(y) ? y : 100);
  const wSafe = $derived(
    Number.isFinite(w)
      ? Math.max(0, Math.min(w, widthSafe))
      : widthSafe / 2
  );
  const svgKey = $derived(`${widthSafe}-${ySafe}-${wSafe}`);
</script>

<div
  class="trapezoid-wrapper"
  class:invert
  bind:clientWidth
  style={`--start: ${startEnd}; --end: -${startEnd}; --width: ${width}px`}
>
  {#if clientWidth >= 540}
    {@render children?.()}
  {/if}
  {#key svgKey}
    <svg
      viewBox="0 0 {widthSafe} {ySafe}"
      height={ySafe}
      preserveAspectRatio="none"
      {color}
      style={`--start: ${startEnd}; --end: -${startEnd}; --width: ${widthSafe}px`}
    >
      <defs>
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.35 0"
          />
        </filter>
        <pattern id="grain" patternUnits="userSpaceOnUse" width="64" height="64">
          <rect width="64" height="64" filter="url(#noise)" />
        </pattern>
      </defs>
      <polygon
        points="0,0 {wSafe},{ySafe} {widthSafe - wSafe},{ySafe} {widthSafe},0"
        fill="currentColor"
      />
      <polygon
        points="0,0 {wSafe},{ySafe} {widthSafe - wSafe},{ySafe} {widthSafe},0"
        fill="url(#grain)"
        style="opacity: 0.4; mix-blend-mode: overlay;"
      />
      <!-- style="mix-blend-mode: multiply;" -->
      <polyline
        points="0,0 {wSafe},{ySafe}"
        fill="none"
        stroke-width="1.2"
        stroke="var(--border-tertiary)"
      />
      <polyline
        points="{widthSafe - wSafe},{ySafe} {widthSafe},0"
        fill="none"
        stroke="var(--border-tertiary)"
        stroke-width="1.2"
      />
    </svg>
  {/key}
  <div class="divider-wrapper" style="width: 100%"></div>
</div>

<style>
  .trapezoid-wrapper {
    position: relative;
    width: 100%;
    grid-column: var(--start) / var(--end);
    height: max-content;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }
  .trapezoid-wrapper.invert {
    flex-direction: column-reverse;
  }
  svg {
    position: relative;
    grid-column: var(--start) / var(--end);
  }
  .divider-wrapper {
    border-bottom: 1.2px dashed var(--border-tertiary);
    border-bottom-style: dashed;
    border-bottom-width: 1.3px;
    border-bottom-color: var(--border-tertiary);
    border-image-slice: 1;
    border-image-source: repeating-linear-gradient(
      to right,
      var(--border-tertiary) 0,
      var(--border-tertiary) 8px,
      transparent 8px,
      transparent 12px
    );
    border-top: none;
    margin: 0 auto;
    margin-bottom: -1px;
    z-index: 3;
  }
  .invert svg {
    transform-box: fill-box;
    transform-origin: center;
    transform: rotate(180deg);
  }
</style>
