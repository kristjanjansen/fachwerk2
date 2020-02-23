import { ref, watch } from "../deps/vue.js";

export const FDocument = {
  props: {
    document: {
      default: "",
      type: String
    }
  },
  setup(props) {
    const currentDocument = ref("");
    watch(
      () => props.document,
      document => (currentDocument.value = document)
    );
    return { currentDocument };
  },
  template: `
  <div style="display: grid; grid-template-columns: 1fr 1fr;">
    <f-document-editor
      :content="currentDocument"
      @input:content="document => currentDocument = document"
    />
    <f-document-viewer :document="currentDocument" />
  </div>
  `
};
