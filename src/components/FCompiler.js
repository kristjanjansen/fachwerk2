import { computed, h, compile, onErrorCaptured, inject } from "../deps/vue.js";
import marked from "../deps/marked.js";
import { utils, onCompilerError } from "../../fachwerk.js";

const renderer = new marked.Renderer();

renderer.code = (code, info) => {
  const escapedCode = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  if (info === "vue") {
    return `<pre v-pre>${escapedCode}</pre>

${code}`;
  }
  return `<pre v-pre>${escapedCode}</pre>`;
};

const compileContent = content => {
  let c = () => null;
  try {
    c = compile(marked(content, { renderer, breaks: true }), {
      onError: onCompilerError
    });
  } catch (error) {
    onCompilerError(error);
  }
  return c;
};

export const FCompiler = {
  props: {
    content: {
      default: ""
    }
  },
  setup(props) {
    onErrorCaptured(onCompilerError);
    const customUtils = inject("customUtils");
    const compiledContent = computed(() => ({
      setup() {
        return { ...utils, ...customUtils };
      },
      render: compileContent(props.content)
    }));

    return () => (compiledContent.value ? h(compiledContent.value) : null);
  }
};
