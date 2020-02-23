import { computed, h, compile, onErrorCaptured } from "../deps/vue.js";
import marked from "../deps/marked.js";
import { utils, onCompilerError } from "../../fachwerk.js";

const compiled = content => {
  let c = () => null;
  try {
    c = compile(marked(content, { breaks: true }), {
      onError: onCompilerError
    });
  } catch (e) {
    console.log("E", e);
  }
  return c;
};

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
      render: compiled(props.content)
    }));

    return () => (compiledContent.value ? h(compiledContent.value) : null);
  }
};
