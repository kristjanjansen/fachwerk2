import { computed, h, compile, onErrorCaptured } from "../deps/vue.js";
import marked from "../deps/marked.js";
import { utils, onCompilerError } from "../../fachwerk.js";

export const FDocumentCompiler = {
  props: {
    content: {
      default: ""
    }
  },
  setup(props) {
    onErrorCaptured(onCompilerError);
    const compiledContent = computed(() => ({
      setup() {
        return { ...utils };
      },
      render: compile(marked(props.content, { breaks: true }), {
        onError: onCompilerError
      })
    }));

    return () => (compiledContent.value ? h(compiledContent.value) : null);
  }
};
