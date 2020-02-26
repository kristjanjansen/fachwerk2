import { inject, watch } from "../deps/vue.js";

import {
  stylingProps,
  stylingCanvas,
  transformTwoProps,
  transformCanvas,
  transformCanvasReset
} from "../internals/index.js";

export const FBoxCanvas = {
  props: {
    r: { default: 1 },
    ...stylingProps,
    ...transformTwoProps
  },
  setup(props) {
    const ctx = inject("ctx");
    watch(() => {
      if (ctx.value) {
        transformCanvas(props, ctx.value);
        stylingCanvas(props, ctx.value);
        if (props.fill !== "none") {
          ctx.value.fillRect(props.r / -2, props.r / -2, props.r, props.r);
        }
        if (props.stroke !== "none") {
          ctx.value.strokeRect(props.r / -2, props.r / -2, props.r, props.r);
        }
        transformCanvasReset(ctx.value);
      }
    });
    return () => null;
  }
};
