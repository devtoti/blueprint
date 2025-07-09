<script lang="ts">
  let { rotate = 0 } = $props();
  const isVertical = rotate === 90 || rotate === 270;
  const viewBoxWidth = isVertical ? 18 : 32;
  const viewBoxHeight = isVertical ? 32 : 18;
  const centerX = viewBoxWidth / 2;
  const centerY = viewBoxHeight / 2;
  const transform = `rotate(${rotate} ${centerX} ${centerY})`;
</script>

<svg
  viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  role="presentation"
  style="width: {isVertical ? 18 : 32}px; height: {isVertical ? 32 : 18}px;"
>
  <g {transform}>
    <path d="M32 1V17H0V1H32Z" fill="#E7EDFF" />
    <path
      d="M32.0605 16.9023H0.0605469V17.4023H32.0605V16.9023ZM0.0605469 1.40234H32.0605V0.902344H0.0605469V1.40234Z"
      fill="#4774CC"
    />
    <mask id="path-3-inside-1_267_2490" fill="white">
      <path d="M32.0605 3.15234V15.1523H0.0605469V3.15234H32.0605Z" />
    </mask>
    <path
      d="M32.0605 3.15234V15.1523H0.0605469V3.15234H32.0605Z"
      fill="#ACC4E6"
    />
    <path
      d="M32.0605 3.15234V15.1523H0.0605469V3.15234H32.0605Z"
      fill="url(#pattern0_267_2490)"
      fill-opacity="0.75"
    />
    <path
      d="M32.0605 13.1523H0.0605469V17.1523H32.0605V13.1523ZM0.0605469 5.15234H32.0605V1.15234H0.0605469V5.15234Z"
      fill="#173E88"
      mask="url(#path-3-inside-1_267_2490)"
    />
    <defs>
      <pattern
        id="pattern0_267_2490"
        patternContentUnits="objectBoundingBox"
        width="0.25"
        height="0.09375"
      >
        <use
          xlink:href="#image0_267_2490"
          transform="matrix(0 -0.0078125 0.0208333 0 0 0.09375)"
        />
      </pattern>
      <image
        id="image0_267_2490"
        width="12"
        height="12"
        preserveAspectRatio="none"
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAF5JREFUKFNjZCAC2JRsrGf4/7+B4f//RkZC6pEVH+kLbMCrAV0xyHCcGrApxqkBl2KsGvApxtBASDGKBmIUwzUQqxisgRTFEA3FG/6DYhAUKcREIqNN0foGYhWDkgcAAP9pKFSW/G8AAAAASUVORK5CYII="
      />
    </defs>
  </g>
</svg>

<style>
  /* svg {
    transform: rotate(90deg);
    transform-origin: center;
  } */
</style>
