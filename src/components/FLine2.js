import { line } from "../deps/d3-shape.js";

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
