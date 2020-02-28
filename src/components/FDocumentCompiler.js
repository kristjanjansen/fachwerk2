import { computed, h, compile, onErrorCaptured } from "../deps/vue.js";
import marked from "../deps/marked.js";
import { utils, onCompilerError } from "../../fachwerk.js";

const renderer = new marked.Renderer();

renderer.code = (code, info, escaped) => {
  const escapeReplacements = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  const getEscapeReplacement = ch => escapeReplacements[ch];
  const escapedCode = code.replace(/[&<>"']/g, getEscapeReplacement);
  if (info === "fw") {
    return `<pre>${escapedCode}</pre>

${code}`;
  }
  return `<pre>${escapedCode}</pre>`;
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
      render: compileContent(props.content)
    }));

    return () => (compiledContent.value ? h(compiledContent.value) : null);
  }
};
