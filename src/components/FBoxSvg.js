import { stylingProps, useStyling2d } from "../libs/styling.js";
import { transform2dProps, useTransform2d } from "../libs/transforms.js";

export const FBoxSvg = {
  props: { r: { default: 1 }, ...transform2dProps, ...stylingProps },
  setup(props) {
    const styling = useStyling2d(props);
    const transform = useTransform2d(props);
    return { styling, transform };
  },
  template: `
    <rect 
      x="0"
      y="0"
      :width="r"
      :height="r"
      :fill="styling.fill"
      :stroke="styling.stroke"
      :stroke-width="styling.strokeWidth"
      :transform="transform"
    />`
};
