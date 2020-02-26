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
    const ctx = inject("ctx");
    watch(() => {
      if (ctx.value) {
        transformCanvas(props, ctx.value);
        stylingCanvas(props, ctx.value);
        ctx.value.beginPath();
        ctx.value.arc(0, 0, props.r, 0, 2 * Math.PI);
        if (props.fill !== "none") {
          ctx.value.fill();
        }
        if (props.stroke !== "none") {
          ctx.value.stroke();
        }
        transformCanvasReset(ctx.value);
      }
    });
    return () => null;
  }
};
