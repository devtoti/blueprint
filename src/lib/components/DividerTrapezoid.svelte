<script>
  let { x, y, w, startEnd = 1, invert = false } = $props();
</script>

<svg
  class:invert
  viewBox="0 0 {x} {y}"
  height={y}
  width="100%"
  preserveAspectRatio="none"
  style={`--start: ${startEnd}; --end: -${startEnd}`}
>
  <polygon points="0,0 {w},{y} {x - w},{y} {x},0" fill="#E9E8E6" />
  <polyline points="0,0 {w},{y}" fill="none" stroke="blue" />
  <polyline
    points="{w},{y} {x - w}, {y}"
    fill="none"
    stroke-dasharray="8"
    stroke-width="1.5"
    stroke="blue"
  />
  <polyline points="{x - w},{y} {x},0" fill="none" stroke="blue" />
</svg>

<style>
  svg {
    grid-column: var(--start) / var(--end);
    width: 100%;
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
