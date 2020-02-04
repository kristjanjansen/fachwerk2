import { inject } from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

export const FCircle = {
  props: { r: { default: 10 } },
  setup() {
    const svgUnit = inject("svgUnit");
    return { svgUnit };
  },
  template: `
    <circle 
      cx="0"
      cy="0"
      :r="r"
      fill="none"
      stroke="black"
      :stroke-width="svgUnit"
    ></circle>`
};
