import { ref, watch } from "../deps/vue.js";

export const FDocumentEditor = {
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
    <f-editor v-model="currentContent" />
    <div>{{content}}</div>
  </div>
  `
};
