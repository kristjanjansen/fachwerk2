//@ts-check

import {
  inject,
  provide,
  watch,
  ref,
  onMounted
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import { stylingProps, useStyling2d } from "../libs/styling.js";
import { transform2dProps, transform2dCanvas } from "../libs/transforms.js";
import { deg2rad } from "../utils.js";

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
        console.log(props.r);
        transform2dCanvas(props, ctx.value);
        ctx.value.lineWidth = 1;
        ctx.value.beginPath();
        ctx.value.strokeRect(0, 0, props.r, props.r);
        //ctx.value.arc(100, 100, props.r, 0, 2 * Math.PI);
        ctx.value.stroke();
        ctx.value.resetTransform();
        ctx.value.scale(2, 2);
      }
    });
    return () => null;
  }
};
