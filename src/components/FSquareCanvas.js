import { inject, watch } from "../deps/vue.js";

import {
  stylingProps,
  stylingCanvas,
  transformTwoProps,
  transformCanvas,
  transformCanvasReset
} from "../internals/index.js";

export const FSquareCanvas = {
  props: {
    r: { default: 1 },
    ...stylingProps,
    ...transformTwoProps
  },
  setup(props) {
    const scene = inject("scene");
    watch(() => {
      if (scene.value) {
        transformCanvas(props, scene.value);
        stylingCanvas(props, scene.value);
        if (props.fill !== "none") {
          scene.value.fillRect(-props.r, -props.r, props.r * 2, props.r * 2);
        }
        if (props.stroke !== "none") {
          scene.value.strokeRect(-props.r, -props.r, props.r * 2, props.r * 2);
        }
        transformCanvasReset(scene.value);
      }
    });
    return () => null;
  }
};
