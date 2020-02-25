import { computed, watch } from "../deps/vue.js";
import { parseDocument } from "../libs/parser.js";
import {
  setSlideCount,
  onToggleSlideMode,
  onPrevSlide,
  onNextSlide,
  isSlideVisible,
  state
} from "../libs/viewer.js";

export const FDocumentViewer = {
  props: {
    document: {
      default: "",
      type: String
    }
  },
  setup(props) {
    const parsedDocument = computed(() => parseDocument(props.document));
    watch(parsedDocument, document => setSlideCount(document.length));

    return {
      parsedDocument,
      onToggleSlideMode,
      onPrevSlide,
      onNextSlide,
      isSlideVisible,
      state
    };
  },
  template: `
  <div style="border: 1px solid green;">
    <button @click="onPrevSlide">←</button>
    <button @click="onNextSlide">→</button>
    <button @click="onToggleSlideMode">Mode</button>
    <div v-for="(page,i) in parsedDocument" style="margin: 3px; border: 1px solid red;">
      <div v-for="content in page.content" v-if="isSlideVisible(i)" style="margin: 3px; border: 1px solid blue;">
        <f-document-compiler :content="content" />
      </div>
    </div>
  </div>
  `
};
