import { computed, h, provide } from "../deps/vue.js";

import { FSceneSvg } from "./FSceneSvg.js";
import { FSceneCanvas } from "./FSceneCanvas.js";
import { FSceneThree } from "./FSceneThree.js";

const FSceneThreeSvg = (props, context) =>
  h(FSceneThree, { ...props, renderer: "svg", ...context }, context.slots);

const FSceneThreeWebgl = (props, context) =>
  h(FSceneThree, { ...props, renderer: "webgl", ...context }, context.slots);

const getSceneType = props => {
  return computed(() => {
    let type = "svg";
    if (props["vector"] === "" || props["vector"]) {
      type = "svg";
    }
    if (props["bitmap"] === "" || props["bitmap"]) {
      type = "canvas";
    }
    if (props["vector3"] === "" || props["vector3"]) {
      type = "threeSvg";
    }
    if (props["bitmap3"] === "" || props["bitmap3"]) {
      type = "threeWebgl";
    }
    console.log(type);
    return type;
  });
};

export const FScene = {
  props: {
    vector: {
      default: false,
      type: [String, Boolean]
    },
    vector3: {
      default: false,
      type: [String, Boolean]
    },
    bitmap: {
      default: false,
      type: [String, Boolean]
    },
    bitmap3: {
      default: false,
      type: [String, Boolean]
    }
  },
  setup(props, context) {
    console.log(props);
    const type = getSceneType(props);
    const types = {
      svg: FSceneSvg,
      canvas: FSceneCanvas,
      threeSvg: FSceneThreeSvg,
      threeWebgl: FSceneThreeWebgl
    };
    provide("sceneType", type);
    return () => h(types[type.value], { ...props, ...context }, context.slots);
  }
};
