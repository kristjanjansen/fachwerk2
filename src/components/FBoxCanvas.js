import { inject, watch } from "../deps/vue.js";

import { stylingProps, styling2dCanvas } from "../libs/styling.js";
import {
  transform2dProps,
  transform2dCanvas,
  reset2dCanvas
} from "../libs/transforms.js";

export const FBoxCanvas = {
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
        if (props.fill) {
          ctx.value.fillRect(50, 50, props.r, props.r);
        }
        if (props.stroke !== "none") {
          //ctx.value.beginPath();
          ctx.value.strokeRect(50, 50, props.r, props.r);
          //ctx.value.arc(100, 100, props.r, 0, 2 * Math.PI);
          //ctx.value.stroke();
        }
        reset2dCanvas(ctx.value);
      }
    });
    return () => null;
  }
};
