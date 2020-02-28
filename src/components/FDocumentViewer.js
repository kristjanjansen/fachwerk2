import { computed } from "../deps/vue.js";
import { parseDocument, viewerGridStyle } from "../internals/index.js";

export const FDocumentViewer = {
  props: {
    document: {
      default: "",
      type: String
    },
    index: {
      default: null,
      type: String
    }
  },
  setup(props) {
    const parsedDocument = computed(() => parseDocument(props.document));

    return { parsedDocument, viewerGridStyle };
  },
  template: `
  <div>
    <div
      v-for="(slide,i) in parsedDocument"
      :style="{
        padding: 'var(--base4)',
        display: 'grid',
        ...viewerGridStyle(slide)
      }"
    >
    <div v-for="content in slide.content">
      <f-document-compiler :content="content" />
    </div>
  </div>
  `
};
