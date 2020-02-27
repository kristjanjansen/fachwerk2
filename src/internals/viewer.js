export const viewerGridStyle = slide => {
  return {
    gridTemplateColumns: slide.cols
      ? slide.cols
      : "repeat(" + slide.colCount + ", 1fr)",
    gridTemplateRows: slide.rows
      ? slide.rows
      : slide.rowCount > 1
      ? "repeat(" + (slide.rowCount - 1) + ", auto) 1fr"
      : "1fr",
    gridTemplateAreas: slide.areas,
    gridGap: slide.gap ? slide.gap : "var(--base3)"
  };
};
