import { computed, h, compile, onErrorCaptured } from "../deps/vue.js";
import marked from "../deps/marked.js";
import { utils, onCompilerError } from "../../fachwerk.js";

export const FMarkdown = {
  props: {
    markdown: {
      default: ""
    }
  },
  setup(props) {
    onErrorCaptured(onCompilerError);
    const compiledMarkdown = computed(() => ({
      setup() {
        return { ...utils };
      },
      render: compile(marked(props.markdown, { breaks: true }), {
        onError: onCompilerError
      })
    }));

    return () => (compiledMarkdown.value ? h(compiledMarkdown.value) : null);
  }
};
