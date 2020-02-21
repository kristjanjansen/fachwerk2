import { h, inject } from "../deps/vue.js";

import { FBoxSvg } from "./FBoxSvg.js";
import { FBoxCanvas } from "./FBoxCanvas.js";
import { FBoxThree } from "./FBoxThree.js";

export const FBox = {
  setup(props, context) {
    const types = {
      svg: FBoxSvg,
      canvas: FBoxCanvas,
      threeSvg: FBoxThree,
      threeWebgl: FBoxThree
    };
    const type = inject("sceneType");
    return () => h(types[type.value], { ...props, ...context }, context.slots);
  }
};
