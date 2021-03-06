import { computed, h, provide } from "../deps/vue.js";

import { FSceneSvg } from "./FSceneSvg.js";
import { FSceneCanvas } from "./FSceneCanvas.js";
import { FSceneThree } from "./FSceneThree.js";

import { sizeProps } from "../internals/size.js";

export const FSceneThreeSvg = (props, context) =>
  h(FSceneThree, { ...props, renderer: "svg" }, context.slots);

export const FSceneThreeWebgl = (props, context) =>
  h(FSceneThree, { ...props, renderer: "webgl" }, context.slots);

export const FScene = {
  props: {
    type: {
      default: "svg",
      type: String
    }
  },
  setup(props, context) {
    const types = {
      svg: FSceneSvg,
      canvas: FSceneCanvas,
      three: FSceneThreeSvg,
      webgl: FSceneThreeWebgl
    };
    const type = computed(() => props.type);
    provide("sceneContext", { type });

    return () => h(types[type.value], { ...props }, context.slots);
  }
};
