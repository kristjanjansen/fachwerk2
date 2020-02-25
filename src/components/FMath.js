import { ref, watch } from "../deps/vue.js";
import { katex } from "../deps/katex.js";

export const FMath = {
  setup(_, { slots }) {
    const math = ref("");
    watch(
      () => slots.default(),
      nodes => {
        const node = nodes[0].children;
        math.value = katex.renderToString(String.raw`${node}`, {
          throwOnError: false
        });
      }
    );
    return { math };
  },
  template: `<div v-html="math" />`,
  css: /*css */ `
  @import url('https://unpkg.com/katex@0.11.1/dist/katex.min.css');
  `
};
