import { ref, watch } from "../deps/vue.js";
import { log } from "../../fachwerk.js";

export const FDocumentEditor = {
  props: {
    content: {
      default: "",
      type: String
    }
  },
  setup(props) {
    const currentContent = ref("zzz");
    // watch(
    //   () => props.content,
    //   content => (currentContent.value = content)
    // );
    return { currentContent, log };
  },
  template: `
  <div style="border: 1px solid red; display: grid; grid-template-columns: 1fr 1fr;">
    <f-editor
      :content="currentContent"
      @input:content="content => currentContent = content"
    />
    <f-content :content="currentContent" />
  </div>
  `
};
