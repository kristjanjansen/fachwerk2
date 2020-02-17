// @ts-check
import { inject } from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";
import { transform2dProps, stylingProps } from "../libs/props";

export const FBox2 = {
  props: { r: { default: 10 }, ...transform2dProps, ...stylingProps },
  setup() {
    const svgUnit = inject("svgUnit");
    return { svgUnit };
  },
  template: `
    <rect 
      x="0"
      y="0"
      :width="r"
      :height="r"
      fill="none"
      stroke="black"
      :stroke-width="svgUnit"
    />`
};
