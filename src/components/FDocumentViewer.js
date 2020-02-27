import { computed, watch } from "../deps/vue.js";
import { parseDocument } from "../internals/index.js";
import {
  setSlideCount,
  onToggleSlideMode,
  onPrevSlide,
  onNextSlide,
  isSlideVisible,
  state
} from "../internals/index.js";

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
  <div>
    <button @click="onPrevSlide">←</button>
    <button @click="onNextSlide">→</button>
    <button @click="onToggleSlideMode">Slide mode</button>
    <div v-for="(page,i) in parsedDocument" style="padding: var(--base2);">
      <div v-for="content in page.content" v-if="isSlideVisible(i)">
        <f-document-compiler :content="content" />
      </div>
    </div>
  </div>
  `
};
