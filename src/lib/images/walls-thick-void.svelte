<script lang="ts">
  let {
    rotate = 0,
    growX = false,
    growY = false,
    width = 32,
    height = 16,
  } = $props();
  const isVertical = rotate === 90 || rotate === 270;
</script>

<svg
  width={isVertical ? height : width}
  height={isVertical ? width : height}
  viewBox="0 0 {isVertical ? height : width} {isVertical ? width : height}"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  style="transform: rotate({rotate}deg); transform-origin: center;"
>
  <g opacity="0.2">
    <mask id="path-1-inside-1_267_2519" fill="white">
      <path d="M0 2.28516V14.2852H100V2.28516H0Z" />
    </mask>
    <path d="M0 2.28516V14.2852H100V2.28516H0Z" fill="#ACC4E6" />
    <path
      d="M0 2.28516V14.2852H100V2.28516H0Z"
      fill="url(#pattern0_267_2519)"
      fill-opacity="0.75"
    />
    <path
      d="M0 2.28516H-1V1.28516H0V2.28516ZM0 14.2852V15.2852H-1V14.2852H0ZM100 14.2852H101V15.2852H100V14.2852ZM100 2.28516V1.28516H101V2.28516H100ZM1 2.28516V14.2852H-1V2.28516H1ZM0 13.2852H100V15.2852H0V13.2852ZM99 14.2852V2.28516H101V14.2852H99ZM100 3.28516H0V1.28516H100V3.28516Z"
      fill="#173E88"
      mask="url(#path-1-inside-1_267_2519)"
    />
  </g>
  <defs>
    <pattern
      id="pattern0_267_2519"
      patternContentUnits="objectBoundingBox"
      width="0.25"
      height="0.09375"
    >
      <use
        xlink:href="#image0_267_2519"
        transform="matrix(0 -0.0078125 0.0208333 0 0 0.09375)"
      />
    </pattern>
    <image
      id="image0_267_2519"
      width="12"
      height="12"
      preserveAspectRatio="none"
      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAF5JREFUKFNjZCAC2JRsrGf4/7+B4f//RkZC6pEVH+kLbMCrAV0xyHCcGrApxqkBl2KsGvApxtBASDGKBmIUwzUQqxisgRTFEA3FG/6DYhAUKcREIqNN0foGYhWDkgcAAP9pKFSW/G8AAAAASUVORK5CYII="
    />
  </defs>
</svg>
