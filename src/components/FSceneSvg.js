import { ref, provide, computed } from "../deps/vue.js";

import { sizeProps, useSize } from "../internals/size.js";

export const FSceneSvg = {
  props: { ...sizeProps },
  setup(props) {
    const el = ref(null);
    const { width, height, viewBox } = useSize(props);

    const scene = computed(() => ({
      unit: 1
    }));

    provide("scene", scene);

    return { el, width, height, viewBox };
  },
  template: `<div ref="el">
    <svg
      :width="width"
      :height="width"
      :view-box.camel="viewBox"
      style="border: 1px solid red;"
    >
      <slot />
    </svg>
  </div>
  `
};
