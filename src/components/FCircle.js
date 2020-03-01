import { h, inject } from "../deps/vue.js";

import { FCircleSvg } from "./FCircleSvg.js";
import { FCircleCanvas } from "./FCircleCanvas.js";
import { FCircleThree } from "./FCircleThree.js";

export const FCircle = {
  setup(props, { slots }) {
    const types = {
      svg: FCircleSvg,
      canvas: FCircleCanvas,
      three: FCircleThree,
      webgl: FCircleThree
    };
    const sceneContext = inject("sceneContext");
    return () =>
      types[sceneContext.type.value]
        ? h(types[sceneContext.type.value], { ...props }, slots)
        : null;
  }
};
