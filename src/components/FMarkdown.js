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
    onErrorCaptured(e => console.log(e));
    const error = ref("");
    const compiledMarkdown = computed(() => ({
      setup() {
        return { ...utils };
      },
      render: compile(marked(props.markdown, { breaks: true }), {
        onError: () => null
      })
    }));

    return () => (compiledMarkdown.value ? h(compiledMarkdown.value) : null);
  }
};
