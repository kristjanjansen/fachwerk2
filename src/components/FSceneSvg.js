import { ref, provide, computed } from "../deps/vue.js";

export const FSceneSvg = {
  setup() {
    const svg = ref(null);
    const width = ref(200);
    const svgUnit = computed(() => (width.value ? 200 / width.value : 1));
    const viewBox = computed(() => `0 0 200 200`);

    provide("svgUnit", svgUnit);

    return { svg, width, viewBox };
  },
  template: `<div ref="svg">
    <svg
      style="border: 1px solid red; display: block; --width: 100%; --height: auto;"
      :width="width"
      :height="width"
      :view-box.camel="viewBox"
    >
      <slot />
    </svg>
  </div>
  `
};
