import {
  inject,
  provide,
  watch,
  ref,
  onMounted
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

export const FCanvasCircle = {
  props: {
    r: { default: 1 }
  },
  setup(props) {
    const ctx = inject("ctx");
    watch(() => {
      if (ctx.value) {
        ctx.value.lineWidth = 1;
        ctx.value.beginPath();
        ctx.value.arc(100, 100, props.r, 0, 2 * Math.PI);
        ctx.value.stroke();
      }
    });
    return () => null;
  }
};
