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
        padding: 'var(--base2)',
        display: 'grid',
        ...viewerGridStyle(slide)
      }"
    >
      <f-document-compiler
        v-for="content in slide.content"
        :content="content"
      />
    </div>
  </div>
  `
};
