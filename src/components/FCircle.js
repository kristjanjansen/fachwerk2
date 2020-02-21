import { h, inject } from "../deps/vue.js";

import { FCircleSvg } from "./FCircleSvg.js";
import { FCircleCanvas } from "./FCircleCanvas.js";

export const FCircle = {
  setup(props, context) {
    const types = {
      svg: FCircleSvg,
      canvas: FCircleCanvas,
      threeSvg: null,
      threeWebgl: null
    };
    const type = inject("sceneType");
    return () =>
      types[type.value]
        ? h(types[type.value], { ...props, ...context }, context.slots)
        : null;
  }
};
