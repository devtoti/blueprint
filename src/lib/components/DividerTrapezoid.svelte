<script>
  let { width, y, w, startEnd = 2, invert = false } = $props();
</script>

<svg
  class:invert
  class="grainy"
  viewBox="0 0 {width} {y}"
  height={y}
  preserveAspectRatio="none"
  style={`--start: ${startEnd}; --end: -${startEnd}; --width: ${width}px`}
>
  <defs>
    <pattern id="grain" patternUnits="userSpaceOnUse" width="64" height="64">
      <image
        href="src/lib/images/grainy-texture.png"
        x="0"
        y="0"
        width="64"
        height="64"
        style="filter: invert(0.15); mix-blend-mode: multiply;"
      />
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
  <polyline points="0,0 {w},{y}" fill="none" stroke="var(--border-secondary)" />
  <polyline
    points="{w},{y} {width - w}, {y}"
    fill="none"
    stroke-dasharray="8"
    stroke-width="1.5"
    stroke="var(--border-secondary)"
  />
  <polyline points="{width - w},{y} {width},0" fill="none" stroke="var(--border-secondary)" />
</svg>

<style>
  svg {
    position: relative;
    grid-column: var(--start) / var(--end);
  }
  svg.invert {
    transform-box: fill-box;
    transform-origin: center;
    transform: rotate(180deg);
  }
</style>
