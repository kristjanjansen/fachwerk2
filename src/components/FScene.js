import { h, provide } from "../deps/vue.js";

import { FSceneSvg } from "./FSceneSvg.js";
import { FSceneCanvas } from "./FSceneCanvas.js";
import { FSceneThree } from "./FSceneThree.js";

export const FScene = {
  props: {
    type: {
      default: "svg",
      type: String
    }
  },
  setup(props, context) {
    const sceneTypes = {
      svg: FSceneSvg,
      canvas: FSceneCanvas,
      svg3: FSceneThree,
      webgl: FSceneThree
    };
    provide("sceneType", props.type);
    return () =>
      h(sceneTypes[props.type], { props, ...context }, context.slots);
  }
};
