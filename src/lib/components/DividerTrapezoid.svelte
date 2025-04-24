<script>
  let { width, y, w, startEnd = 2, invert = false } = $props();
</script>

<div
  class="trapezoid-wrapper"
  class:invert
  style={`--start: ${startEnd}; --end: -${startEnd}; --width: ${width}px`}
>
  <svg
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
