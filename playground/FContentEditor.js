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
  <div
    style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 100vh;">
    <f-editor
      :content="currentContent"
      @input:content="content => currentContent = content"
    />
    <f-content  style="overflow: auto" :content="currentContent" />
  </div>
  `
};
