import { browser } from "$app/environment";
export { GRID, initialGrid }
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
    if (!browser) return initialGrid;
    const grid = document.querySelector("main")
    if (!grid) return initialGrid;
    const computedStyle = window.getComputedStyle(grid);
    // Guard against styles not being ready yet (can result in NaN).
    const columnGapRaw = parseFloat(computedStyle.columnGap);
    const columnGap = Number.isFinite(columnGapRaw) ? columnGapRaw : 0;

    const columnWidthRaw = parseFloat(
        computedStyle.gridTemplateColumns.split(" ")[2]
    );
    const columnWidth = Number.isFinite(columnWidthRaw) ? columnWidthRaw : 0;
    const columns = computedStyle.getPropertyValue("grid-template-columns");
    const paddingRaw = parseFloat(computedStyle.getPropertyValue("padding").split(" ")[1])
    const padding = Number.isFinite(paddingRaw) ? paddingRaw : 0
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
    return gridData;
};

