import { inject, watch } from "../deps/vue.js";

import { stylingProps, styling2dCanvas } from "../libs/styling.js";
import {
  transform2dProps,
  transform2dCanvas,
  reset2dCanvas
} from "../libs/transforms.js";

export const FCircleCanvas = {
  props: {
    ...transform2dProps,
    ...stylingProps,
    r: { default: 1 }
  },
  setup(props) {
    const ctx = inject("ctx");
    watch(() => {
      if (ctx.value) {
        transform2dCanvas(props, ctx.value);
        styling2dCanvas(props, ctx.value);
        ctx.value.beginPath();
        ctx.value.arc(0, 0, props.r, 0, 2 * Math.PI);
        if (props.fill) {
          ctx.value.fill();
        }
        if (props.stroke !== "none") {
          ctx.value.stroke();
        }
        reset2dCanvas(ctx.value);
      }
    });
    return () => null;
  }
};
