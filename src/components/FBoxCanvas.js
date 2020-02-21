import { inject, watch } from "../deps/vue.js";

import { stylingProps, styling2dCanvas } from "../libs/styling.js";
import {
  transform2dProps,
  transform2dCanvas,
  reset2dCanvas
} from "../libs/transforms.js";

export const FBoxCanvas = {
  props: {
    r: { default: 1 },
    ...stylingProps,
    ...transform2dProps
  },
  setup(props) {
    const ctx = inject("ctx");
    watch(() => {
      if (ctx.value) {
        transform2dCanvas(props, ctx.value);
        styling2dCanvas(props, ctx.value);
        if (props.fill !== "none") {
          ctx.value.fillRect(0, 0, props.r, props.r);
        }
        if (props.stroke !== "none") {
          ctx.value.strokeRect(0, 0, props.r, props.r);
        }
        reset2dCanvas(ctx.value);
      }
    });
    return () => null;
  }
};
