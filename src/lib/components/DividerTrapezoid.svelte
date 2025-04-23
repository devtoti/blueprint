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
  <polygon points="0,0 {w},{y} {width - w},{y} {width},0" fill="#E9E8E6" />
  <polyline points="0,0 {w},{y}" fill="none" stroke="blue" />
  <polyline
    points="{w},{y} {width - w}, {y}"
    fill="none"
    stroke-dasharray="8"
    stroke-width="1.5"
    stroke="blue"
  />
  <polyline points="{width - w},{y} {width},0" fill="none" stroke="blue" />
</svg>

<style>
  svg {
    position: relative;
    grid-column: var(--start) / var(--end);
    /* width: var(--width); */
  }
  svg.invert {
    transform-box: fill-box;
    transform-origin: center;
    transform: rotate(180deg);
  }
  /* svg .invert:first-child {
    transform: rotate(90deg);
    fill: red;
  }

  svg .invert:nth-child(3) {
    transform: rotate(270deg);
    fill: red;
  }

  svg .invert:last-child {
    transform: rotate(180deg);
    stroke-width: 1.5;
  } */
</style>
