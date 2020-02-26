import { h, inject } from "../deps/vue.js";

import { FBoxSvg } from "./FBoxSvg.js";
import { FBoxCanvas } from "./FBoxCanvas.js";
import { FBoxThree } from "./FBoxThree.js";

export const FBox = {
  setup(props, context) {
    const types = {
      svg: FBoxSvg,
      canvas: FBoxCanvas,
      three: FBoxThree,
      webgl: FBoxThree
    };
    const type = inject("type");
    return () => h(types[type.value], { ...props }, context.slots);
  }
};
