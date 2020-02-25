import { ref, watch } from "../deps/vue.js";
import { katex } from "../deps/katex.js";

export const FMath = {
  help: `
Displays KaTeX-based math equations.
  `,
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
