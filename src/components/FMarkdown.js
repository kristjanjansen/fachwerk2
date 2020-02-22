import {
  computed,
  h,
  compile,
  ref,
  watch,
  onErrorCaptured
} from "../deps/vue.js";
import marked from "../deps/marked.js";
import { utils } from "../../fachwerk.js";

export const FMarkdown = {
  props: {
    markdown: {
      default: ""
    }
  },
  setup(props) {
    try {
      onErrorCaptured((a, b, c) => console.log("COMPILE", a, b, c));
      const compiledMarkdown = computed(() => ({
        setup() {
          return { ...utils };
        },
        render: compile(marked(props.markdown, { breaks: true }), {
          onError: () => null
        })
      }));

      return () => (compiledMarkdown.value ? h(compiledMarkdown.value) : null);
    } catch (e) {
      console.log("C", e);
    }
  }
};
