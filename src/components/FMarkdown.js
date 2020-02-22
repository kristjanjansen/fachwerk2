import { computed, h, compile } from "../deps/vue.js";
import marked from "../deps/marked.js";
import { utils } from "../../fachwerk.js";

export const FMarkdown = {
  props: {
    markdown: {
      default: ""
    }
  },
  setup(props) {
    console.log(props.markdown);
    const compiledMarkdown = computed(() => ({
      setup() {
        return { ...utils };
      },
      render: compile(marked(props.markdown, { breaks: true }))
    }));

    return () => (compiledMarkdown.value ? h(compiledMarkdown.value) : null);
  }
};
