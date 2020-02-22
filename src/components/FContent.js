import { computed, watch } from "../deps/vue.js";
import { parseDocument } from "../libs/document.js";
import { get, set } from "../../fachwerk.js";

export const FContent = {
  props: {
    content: {
      default: "",
      type: String
    }
  },
  setup(props) {
    const markdown = computed(() => props.content);
    const parsedDocument = computed(() => parseDocument(props.content));
    return { parsedDocument };
  },
  template: `
  <div style="border: 1px solid green;">
    <div v-for="page in parsedDocument" style="margin: 1px; border: 1px solid red;">
      <div v-for="cell in page.content" style="margin: 1px; border: 1px solid blue;">
        <f-markdown :markdown="cell" />
      </div>
    </div>
  </div>
  `
};
