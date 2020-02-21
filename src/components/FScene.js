import { h, provide } from "../deps/vue.js";

import { FSceneSvg } from "./FSceneSvg.js";
import { FSceneCanvas } from "./FSceneCanvas.js";
import { FSceneSvg3 } from "./FSceneSvg3.js";
import { FSceneCanvas3 } from "./FSceneCanvas3.js";

export const FScene = (props, context) => {
  const sceneTypes = {
    svg: FSceneSvg,
    canvas: FSceneCanvas,
    svg3: FSceneSvg3,
    canvas3: FSceneCanvas3
  };
  return h(sceneTypes[props.type], { props, ...context }, context.slots);
};

// export const FScene = {
//   props: {
//     type: {
//       default: "2d",
//       type: String
//     }
//   },
//   setup(props, context) {
//     //provide("sceneType", props.type);

//     // const sceneTypes = {
//     //   "2d": h(FSceneSvg, { props, ...context }, context.slots),
//     //   "2d-bitmap": h(FSceneCanvas, { props, ...context }, context.slots),
//     //   "3d": h(
//     //     FSceneThree,
//     //     { props: { ...props, type: "svg" }, ...context },
//     //     context.slots
//     //   ),
//     //   "3d-bitmap": h(
//     //     FSceneThree,
//     //     { props: { ...props, type: "webgl" }, ...context },
//     //     context.slots
//     //   )
//     // };
//     //console.log(context.slots);
//     const sceneTypes = {
//       "2d": h(FSceneSvg, { props, ...context }, context.slots),
//       "2d-bitmap": h(FSceneCanvas, { props, ...context }, context.slots),
//       "3d": h(
//         FSceneThree,
//         { props: { ...props, renderer: "svg" }, ...context },
//         context.slots
//       ),
//       "3d-bitmap": h(
//         FSceneThree,
//         { props: { renderer: "webgl" }, ...context },
//         context.slots
//       )
//     };
//     return () => sceneTypes["3d-bitmap"];
//     //return () => h(FSceneSvg, { props, ...context }, context.slots);
//   }
// };
