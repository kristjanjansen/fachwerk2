import {
  line
  // curveCardinal,
  // curveCardinalClosed,
  // arc
} from "https://unpkg.com/d3-shape@1.3.7/src/index.js?module";

export const FLine2 = {
  setup() {
    const path = line()([
      [0, 0],
      [100, 50]
    ]);
    return { path };
  },
  template: `
    <path :d="path" stroke="black" />
  `
};
