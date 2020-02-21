import { h, inject } from "../deps/vue.js";

import { FCircleSvg } from "./FCircleSvg.js";
import { FCircleCanvas } from "./FCircleCanvas.js";
import { FCircleThree } from "./FCircleThree.js";

export const FCircle = {
  setup(props, context) {
    const types = {
      svg: FCircleSvg,
      canvas: FCircleCanvas,
      svg3: FCircleThree,
      webgl: FCircleThree
    };
    const type = inject("sceneType");
    return () =>
      types[type.value]
        ? h(types[type.value], { ...props, ...context }, context.slots)
        : null;
  }
};
