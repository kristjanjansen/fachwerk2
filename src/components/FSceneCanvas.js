import { provide, ref, onMounted, onBeforeUpdate } from "../deps/vue.js";

import { reset2dCanvas } from "../libs/transforms.js";

export const FSceneCanvas = {
  setup() {
    const node = ref(null);
    const ctx = ref(null);
    provide("ctx", ctx);
    onMounted(() => {
      const canvas = node.value;
      canvas.width = 400; // 400
      canvas.height = 400; // 400
      ctx.value = canvas.getContext("2d");
      reset2dCanvas(ctx.value);
    });
    onBeforeUpdate(() => {
      ctx.value.clearRect(0, 0, 400, 400); // 400
    });
    return { node };
  },
  template: `
  <canvas
    style="
      width: 200px;
      height: 200px;
      border: 1px solid red;
    "
    ref="node"
  >
    <slot />
  </canvas>
  `
};
