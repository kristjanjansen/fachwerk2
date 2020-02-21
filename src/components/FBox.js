import { h } from "../deps/vue.js";

import { FSceneCanvas } from "./FSceneCanvas.js";
import { FSceneSvg } from "./FSceneSvg.js";
import { FSceneThree } from "./FSceneThree.js";

export const FScene = (props, context) => {
  return h(FScene3, { props, ...context }, context.slots);
};
