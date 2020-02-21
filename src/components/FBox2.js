import { stylingProps, useStyling2d } from "../libs/styling.js";
import { transform2dProps, useTransform2d } from "../libs/transforms.js";

export const FBox2 = {
  props: { r: { default: 10 }, ...transform2dProps, ...stylingProps },
  setup(props) {
    const transform = useTransform2d(props);
    const styling = useStyling2d(props);
    return { transform, styling };
  },
  template: `
    <rect 
      x="0"
      y="0"
      :width="r"
      :height="r"
      :transform="transform"
      :fill="styling.fill"
      :stroke="styling.stroke"
      :stroke-width="styling.strokeWidth"
    />`
};
