import { provide, ref, onMounted, onBeforeUpdate } from "../deps/vue.js";

export const FSceneCanvas = {
  setup() {
    const node = ref(null);
    const scene = ref(null);
    provide("scene", scene);
    onMounted(() => {
      const canvas = node.value;
      canvas.width = 200;
      canvas.height = 200;
      scene.value = canvas.getContext("2d");
    });
    onBeforeUpdate(() => {
      scene.value.clearRect(0, 0, 200, 200);
    });
    return { node };
  },
  template: `
  <canvas ref="node">
    <slot />
  </canvas>
  `
};
