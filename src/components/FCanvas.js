import {
  inject,
  provide,
  watch,
  ref,
  onMounted
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

export const FCanvas = {
  setup() {
    const node = ref(null);
    const ctx = ref(null);
    provide("ctx", ctx);
    watch(() => console.log(ctx.value));
    onMounted(() => {
      const canvas = node.value;
      canvas.width = 400;
      canvas.height = 400;
      ctx.value = canvas.getContext("2d");
      ctx.value.scale(2, 2);
      // const animate = () => {
      //   ctx.value.save();
      //   //ctx.value.clearRect(0, 0, 400, 400);
      //   ctx.value.restore();
      //   requestAnimationFrame(animate);
      // };
      // animate();
    });
    return { node };
  },
  template: `<canvas style="width: 200px; height: 200px; border: 1px solid red" ref="node"><slot /></canvas>`
};
