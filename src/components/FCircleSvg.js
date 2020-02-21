import { stylingProps, useStyling2d } from "../libs/styling.js";
import { transform2dProps, useTransform2d } from "../libs/transforms.js";

export const FCircleSvg = {
  props: { r: { default: 1 }, ...transform2dProps, ...stylingProps },
  setup(props) {
    const transform = useTransform2d(props);
    const styling = useStyling2d(props);
    return { transform, styling };
  },
  template: `
    <circle 
      cx="0"
      cy="0"
      :r="r"
      :transform="transform"
      :fill="styling.fill"
      :stroke="styling.stroke"
      :stroke-width="styling.strokeWidth"
    />`
};