import { h, provide } from "../deps/vue.js";

import { FSceneCanvas } from "./FSceneCanvas.js";
import { FSceneSvg } from "./FSceneSvg.js";
import { FSceneThree } from "./FSceneThree.js";

export const FScene = {
  props: {
    type: {
      default: "2d",
      type: String
    }
  },
  setup(props, context) {
    //provide("sceneType", props.type);

    // const sceneTypes = {
    //   "2d": h(FSceneSvg, { props, ...context }, context.slots),
    //   "2d-bitmap": h(FSceneCanvas, { props, ...context }, context.slots),
    //   "3d": h(
    //     FSceneThree,
    //     { props: { ...props, type: "svg" }, ...context },
    //     context.slots
    //   ),
    //   "3d-bitmap": h(
    //     FSceneThree,
    //     { props: { ...props, type: "webgl" }, ...context },
    //     context.slots
    //   )
    // };
    //console.log(context.slots);
    const sceneTypes = {
      "2d": h(FSceneSvg, { props, ...context }, context.slots),
      "2d-bitmap": h(FSceneCanvas, { props, ...context }, context.slots),
      "3d": h(
        FSceneThree,
        { props: { ...props, type: "svg" }, ...context },
        context.slots
      )
    };
    return () => sceneTypes["3d"];
    //return () => h(FSceneSvg, { props, ...context }, context.slots);
  }
};
