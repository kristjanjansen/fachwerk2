import { h, inject } from "../deps/vue.js";

import { FSquareSvg } from "./FSquareSvg.js";
import { FSquareCanvas } from "./FSquareCanvas.js";
import { FSquareThree } from "./FSquareThree.js";

export const FSquare = {
  setup(props, context) {
    const types = {
      svg: FSquareSvg,
      canvas: FSquareCanvas,
      three: FSquareThree,
      webgl: FSquareThree
    };
    const type = inject("type");
    return () => h(types[type.value], { ...props }, context.slots);
  }
};
