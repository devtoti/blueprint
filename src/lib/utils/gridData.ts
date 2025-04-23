export { GRID }
const initialGrid = {
    width: 0,
    height: 0,
    columns: 0,
    columnWidth: 0,
    gap: 0,
    getColumnsDistance(cols: number) {
        return 0;
    },
    sidePadding: 0,
    widthNoPadding: 0
}
const GRID = () => {
   if (typeof document === 'undefined') return initialGrid;
    const grid = document.querySelector("main")
    if (!grid) return initialGrid;
    const computedStyle = window.getComputedStyle(grid);
    const columnGap = parseFloat(computedStyle.columnGap);
    const columnWidth = parseFloat(
        computedStyle.gridTemplateColumns.split(" ")[2]
    );
    const columns = computedStyle.getPropertyValue("grid-template-columns");
    const padding = parseFloat(computedStyle.getPropertyValue("padding").split(" ")[1])
    const gridData = {
        width: grid.clientWidth,
        widthNoPadding: grid.clientWidth - padding * 2,
        height: grid.clientHeight,
        columns: columns.split(" ").length,
        columnWidth: columnWidth,
        gap: columnGap,
        getColumnsDistance(cols: number) {
            return +columnWidth.toFixed(2) * cols + columnGap * (cols - 1);
        },
        sidePadding: padding
    };
    console.log(columns)
    return gridData;
};

