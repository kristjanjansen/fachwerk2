import { computed, watch } from "../deps/vue.js";
import { parseDocument } from "../libs/document.js";
import { get, set } from "../../fachwerk.js";

export const FDocumentViewer = {
  props: {
    document: {
      default: "",
      type: String
    }
  },
  setup(props) {
    const parsedDocument = computed(() => parseDocument(props.document));
    return { parsedDocument };
  },
  template: `
  <div style="border: 1px solid green;">
    <div v-for="page in parsedDocument" style="margin: 3px; border: 1px solid red;">
      <div v-for="content in page.content" style="margin: 3px; border: 1px solid blue;">
        <f-document-compiler :content="content" />
      </div>
    </div>
  </div>
  `
};
