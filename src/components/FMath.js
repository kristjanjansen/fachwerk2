import {
  ref,
  watch
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";
import katex from "https://unpkg.com/katex@0.11.1/dist/katex.mjs";

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
  template: `<div v-html="math" />`
};
