<script>
  let { width = 100, y, w, startEnd = 2, invert = false, children } = $props();
  let clientWidth = $state(0);
  // $inspect(clientWidth);
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
  <svg
    viewBox="0 0 {width} {y}"
    height={y}
    preserveAspectRatio="none"
    style={`--start: ${startEnd}; --end: -${startEnd}; --width: ${width}px`}
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
      points="0,0 {w},{y} {width - w},{y} {width},0"
      fill="var(--bg-primary)"
    />
    <polygon
      points="0,0 {w},{y} {width - w},{y} {width},0"
      fill="url(#grain)"
      style="mix-blend-mode: multiply;"
    />
    <polyline
      points="0,0 {w},{y}"
      fill="none"
      stroke-width="1.2"
      stroke="var(--border-secondary)"
    />
    <!-- <polyline
    points="{w},{y} {width - w}, {y}"
    fill="none"
    stroke-dasharray="16"
    stroke-width="3"
    stroke="var(--border-secondary)"
  /> -->
    <polyline
      points="{width - w},{y} {width},0"
      fill="none"
      stroke="var(--border-secondary)"
      stroke-width="1.2"
    />
  </svg>
  <div class="divider-wrapper" style="width: {width - w * 2}px"></div>
</div>

<style>
  .trapezoid-wrapper {
    position: relative;
    width: 100%;
    grid-column: var(--start) / var(--end);
    height: max-content;
    display: flex;
    flex-direction: column;
  }
  .trapezoid-wrapper.invert {
    flex-direction: column-reverse;
  }
  svg {
    position: relative;
    grid-column: var(--start) / var(--end);
  }
  .divider-wrapper {
    border-bottom: 1.2px dashed var(--border-secondary);
    border-bottom-style: dashed;
    border-bottom-width: 1.3px;
    border-bottom-color: var(--border-secondary);
    border-image-slice: 1;
    border-image-source: repeating-linear-gradient(
      to right,
      var(--border-secondary) 0,
      var(--border-secondary) 8px,
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
