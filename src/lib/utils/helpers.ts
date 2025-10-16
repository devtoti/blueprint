export function setDividerWidth(windowWidth: number, grid: { getColumnsDistance: (n: number) => number }) {
  switch (true) {
    case windowWidth <= 464:
      return grid.getColumnsDistance(4);
    case windowWidth > 464 && windowWidth <= 1012:
      return grid.getColumnsDistance(6);
    case windowWidth > 1012:
      return grid.getColumnsDistance(10);
    default:
      return grid.getColumnsDistance(10);
  }
}

