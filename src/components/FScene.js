import { computed, h, provide } from "../deps/vue.js";

import { FSceneSvg } from "./FSceneSvg.js";
import { FSceneCanvas } from "./FSceneCanvas.js";
import { FSceneThree } from "./FSceneThree.js";

export const FSceneThreeSvg = (props, context) =>
  h(FSceneThree, { ...props, renderer: "svg", ...context }, context.slots);

export const FSceneThreeWebgl = (props, context) =>
  h(FSceneThree, { ...props, renderer: "webgl", ...context }, context.slots);

// const getSceneType = props => {
//   return computed(() => {
//     let type = "svg";
//     if (props["vector"] === "" || props["vector"]) {
//       type = "svg";
//     }
//     if (props["svg"] === "" || props["svg"]) {
//       type = "svg";
//     }
//     if (props["bitmap"] === "" || props["bitmap"]) {
//       type = "canvas";
//     }
//     if (props["canvas"] === "" || props["canvas"]) {
//       type = "canvas";
//     }
//     if (props["vector3"] === "" || props["vector3"]) {
//       type = "threeSvg";
//     }
//     if (props["svg3d"] === "" || props["svg3d"]) {
//       type = "threeSvg";
//     }
//     if (props["bitmap3"] === "" || props["bitmap3"]) {
//       type = "threeWebgl";
//     }
//     if (props["webgl"] === "" || props["webgl"]) {
//       type = "threeWebgl";
//     }
//     console.log(type);
//     return type;
//   });
// };

export const FScene = {
  props: {
    type: {
      default: "svg",
      type: String
    }
    // vector: {
    //   default: false,
    //   type: [String, Boolean]
    // },
    // svg: {
    //   default: false,
    //   type: [String, Boolean]
    // },
    // vector3: {
    //   default: false,
    //   type: [String, Boolean]
    // },
    // svg3d: {
    //   default: false,
    //   type: [String, Boolean]
    // },
    // bitmap: {
    //   default: false,
    //   type: [String, Boolean]
    // },
    // canvas: {
    //   default: false,
    //   type: [String, Boolean]
    // },
    // bitmap3: {
    //   default: false,
    //   type: [String, Boolean]
    // },
    // wegbl: {
    //   default: false,
    //   type: [String, Boolean]
    // }
  },
  setup(props, context) {
    const types = {
      svg: FSceneSvg,
      canvas: FSceneCanvas,
      svg3: FSceneThreeSvg,
      webgl: FSceneThreeWebgl
    };
    const type = computed(() => props.type);
    provide("sceneType", type);
    return () => h(types[type.value], { ...props, ...context }, context.slots);
  }
};
