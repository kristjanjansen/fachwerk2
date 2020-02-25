import { provide, ref, onMounted, onBeforeUpdate } from "../deps/vue.js";

export const FSceneCanvas = {
  setup() {
    const node = ref(null);
    const ctx = ref(null);
    provide("ctx", ctx);
    onMounted(() => {
      const canvas = node.value;
      canvas.width = 200;
      canvas.height = 200;
      ctx.value = canvas.getContext("2d");
    });
    onBeforeUpdate(() => {
      ctx.value.clearRect(0, 0, 200, 200); // 400
    });
    return { node };
  },
  template: `
  <canvas style="border: 1px solid red;" ref="node">
    <slot />
  </canvas>
  `
};
