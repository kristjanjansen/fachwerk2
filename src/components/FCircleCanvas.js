import { inject, watch } from "../deps/vue.js";

import {
  stylingProps,
  stylingCanvas,
  transformTwoProps,
  transformCanvas,
  transformCanvasReset
} from "../internals/index.js";

export const FCircleCanvas = {
  props: {
    ...transformTwoProps,
    ...stylingProps,
    r: { default: 1 }
  },
  setup(props) {
    const scene = inject("scene");
    watch(() => {
      if (scene.value) {
        transformCanvas(props, scene.value);
        stylingCanvas(props, scene.value);
        scene.value.beginPath();
        scene.value.arc(0, 0, props.r, 0, 2 * Math.PI);
        if (props.fill !== "none") {
          scene.value.fill();
        }
        if (props.stroke !== "none") {
          scene.value.stroke();
        }
        transformCanvasReset(scene.value);
      }
    });
    return () => null;
  }
};
