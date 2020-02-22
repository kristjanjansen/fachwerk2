import { computed } from "../deps/vue.js";

export const FContent = {
  props: {
    content: {
      default: "",
      type: String
    }
  },
  setup(props) {
    const markdown = computed(() => props.content);
    return { markdown };
  },
  template: `
  <f-markdown :markdown="markdown" />
  `
};
