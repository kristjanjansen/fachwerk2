import { h, inject } from "../deps/vue.js";

import { FSquareSvg } from "./FSquareSvg.js";
import { FSquareCanvas } from "./FSquareCanvas.js";
import { FSquareThree } from "./FSquareThree.js";

export const FSquare = {
  setup(props, { slots }) {
    const types = {
      svg: FSquareSvg,
      canvas: FSquareCanvas,
      three: FSquareThree,
      webgl: FSquareThree
    };
    const sceneContext = inject("sceneContext");
    return () => h(types[sceneContext.type.value], { ...props }, slots);
  }
};
