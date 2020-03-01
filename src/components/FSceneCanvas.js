import { provide, ref, onMounted, onBeforeUpdate } from "../deps/vue.js";

import { sizeProps, useSize } from "../internals/size.js";

export const FSceneCanvas = {
  props: { ...sizeProps },
  setup(props) {
    const el = ref(null);
    const scene = ref(null);
    provide("scene", scene);

    const { width, height } = useSize(props);

    onMounted(() => {
      const canvas = el.value;
      canvas.width = width.value;
      canvas.height = height.value;
      scene.value = canvas.getContext("2d");
    });
    onBeforeUpdate(() => {
      scene.value.clearRect(0, 0, width.value, height.value);
    });
    return { el };
  },
  template: `
  <canvas ref="el" style="border: 1px solid red;">
    <slot />
  </canvas>
  `
};
