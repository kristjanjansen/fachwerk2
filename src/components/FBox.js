import { h, inject } from "../deps/vue.js";

import { FBoxSvg } from "./FBoxSvg.js";
import { FBoxCanvas } from "./FBoxCanvas.js";
import { FBoxThree } from "./FBoxThree.js";

export const FBox = {
  setup(props, context) {
    const types = {
      svg: FBoxSvg,
      canvas: FBoxCanvas,
      svg3: FBoxThree,
      webgl: FBoxThree
    };
    const type = inject("sceneType");
    let r = () => null;
    try {
      r = () => h(types[type.value], { ...props, ...context }, context.slots);
    } catch (e) {
      console.log("AAAAA", e);
    }
    return r;
  }
};
