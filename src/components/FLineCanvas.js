import { line } from "https://unpkg.com/d3-shape@1.3.7/src/index.js?module";

// export const FLine2 = {
//   setup() {
//     const path = line()([
//       [0, 0],
//       [100, 50]
//     ]);
//     return { path };
//   },
//   template: `
//     <path :d="path" stroke="black" />
//   `
// };

import {
  inject,
  watch
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

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
