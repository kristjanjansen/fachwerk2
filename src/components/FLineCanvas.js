import { inject, watch } from "../deps/vue.js";
import { line } from "../deps/d3-shape.js";

export const FLineCanvas = {
  setup(props) {
    const ctx = inject("ctx");
    watch(() => {
      if (ctx.value) {
        const path = line().context(ctx.value);
        ctx.value.beginPath();
        path([
          [0, 0],
          [100, 50]
        ]);
        ctx.value.lineWidth = 1;
        ctx.value.strokeStyle = "black";
        ctx.value.stroke();
      }
    });
    return () => null;
  }
};
