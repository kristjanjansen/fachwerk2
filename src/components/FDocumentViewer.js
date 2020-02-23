import { computed, watch } from "../deps/vue.js";
import { parseDocument, state } from "../libs/document.js";

export const FDocumentViewer = {
  props: {
    document: {
      default: "",
      type: String
    },
    index: {
      default: null,
      type: [String, null]
    }
  },
  setup(props) {
    const parsedDocument = computed(() => parseDocument(props.document));
    const isPageVisible = index => {
      if (state.value.slides == true) {
        return index == state.value.index;
      }
      return true;
    };
    const onNext = () => state.value.index++;
    const onSlides = () => (state.value.slides = !state.value.slides);

    return { parsedDocument, isPageVisible, state, onNext, onSlides };
  },
  template: `
  <div style="border: 1px solid green;">
    {{ state }} / {{ isPageVisible(0) }} <button @click="onNext">Next</button>  <button @click="onSlides">Slides</button>
    <div v-for="page in parsedDocument" style="margin: 3px; border: 1px solid red;">
      <div v-for="content in page.content" style="margin: 3px; border: 1px solid blue;">
        <f-document-compiler :content="content" />
      </div>
    </div>
  </div>
  `
};
