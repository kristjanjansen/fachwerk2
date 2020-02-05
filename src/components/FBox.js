import { inject } from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

export const FBox = {
  props: { r: { default: 10 } },
  setup() {
    const svgUnit = inject("svgUnit");
    return { svgUnit };
  },
  template: `
    <rect 
      x="0"
      y="0"
      width="20"
      height="20"
      fill="none"
      stroke="black"
      :stroke-width="svgUnit"
    />`
};
