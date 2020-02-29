import { ref, provide, computed } from "../deps/vue.js";

export const FSceneSvg = {
  setup() {
    const node = ref(null);
    const width = ref(200);
    const scene = computed(() => ({
      unit: width.value ? 200 / width.value : 1
    }));
    const viewSquare = computed(() => `0 0 200 200`);

    provide("scene", scene);

    return { node, width, viewSquare };
  },
  template: `<div ref="node">
    <svg
      :width="width"
      :height="width"
      :view-box.camel="viewSquare"
    >
      <slot />
    </svg>
  </div>
  `
};
