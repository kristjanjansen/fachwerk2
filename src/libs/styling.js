//@ts-check
import {
  computed,
  inject
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

export const stylingProps = {
  stroke: { default: "black", type: [String] },
  strokeWidth: { default: 3, type: [String, Number] },
  fill: { default: "none", type: [String, Number] },
  opacity: { default: 1, type: [String, Number] },
  fillOpacity: { default: 1, type: [String, Number] },
  strokeOpacity: { default: 1, type: [String, Number] }
};

export const useStyling2d = props => {
  const svgUnit = inject("svgUnit");
  return computed(() => {
    const fill = props.fill;
    const stroke = props.stroke;
    const strokeWidth = parseFloat(props.strokeWidth) * svgUnit.value;
    return { fill, stroke, strokeWidth };
  });
};
