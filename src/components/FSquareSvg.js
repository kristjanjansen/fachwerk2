import {
  stylingProps,
  useSvgStyling,
  transformTwoProps,
  useSvgTransform
} from "../internals/index.js";

export const FSquareSvg = {
  props: { r: { default: 1 }, ...transformTwoProps, ...stylingProps },
  setup(props) {
    const styling = useSvgStyling(props);
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
