import { stylingProps, useStyling2d } from "../libs/styling.js";
import { transform2dProps, useSvgTransform } from "../libs/transform.js";

export const FBoxSvg = {
  props: { r: { default: 1 }, ...transform2dProps, ...stylingProps },
  setup(props) {
    const styling = useStyling2d(props);
    const transform = useSvgTransform(props);
    return { styling, transform };
  },
  template: `
    <rect 
      :x="r / -2"
      :y="r / -2"
      :width="r"
      :height="r"
      :fill="styling.fill"
      :stroke="styling.stroke"
      :stroke-width="styling.strokeWidth"
      :transform="transform"
    />`
};
