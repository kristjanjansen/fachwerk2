import { ref, watch } from "../deps/vue.js";

export const FContentEditor = {
  props: {
    content: {
      default: "",
      type: String
    }
  },
  setup(props) {
    const currentContent = ref("");
    watch(
      () => props.content,
      content => (currentContent.value = content)
    );
    return { currentContent };
  },
  template: `
  <div style="display: grid; grid-template-columns: 1fr 1fr;">
    <f-editor
      :content="currentContent"
      @input:content="content => currentContent = content"
    />
    <f-content :content="currentContent" />
  </div>
  `
};
