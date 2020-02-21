import { h, provide } from "../deps/vue.js";

import { FSceneSvg } from "./FSceneSvg.js";
import { FSceneCanvas } from "./FSceneCanvas.js";
import { FSceneThree } from "./FSceneThree.js";

const FSceneThreeSvg = (props, context) =>
  h(FSceneThree, { ...props, renderer: "svg", ...context }, context.slots);

const FSceneThreeWebgl = (props, context) =>
  h(FSceneThree, { ...props, renderer: "webgl", ...context }, context.slots);

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
      svg3: FSceneThreeSvg,
      webgl: FSceneThreeWebgl
    };
    provide("sceneType", props.type);
    return () =>
      h(sceneTypes[props.type], { ...props, ...context }, context.slots);
  }
};
