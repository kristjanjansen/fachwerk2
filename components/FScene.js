import {
  inject,
  ref,
  onMounted,
  provide,
  computed
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

export const FScene = {
  setup() {
    const svg = ref(null);
    const width = ref(null);
    const svgUnit = computed(() => (width.value ? 200 / width.value : 1));
    const viewBox = computed(() => `-100 -100 200 200`);

    provide("svgUnit", svgUnit);

    onMounted(() => {
      const observer = new ResizeObserver(entries => {
        width.value = entries[0].contentRect.width;
      });
      observer.observe(svg.value);
    });

    return { svg, width, viewBox };
  },
  template: `<div
    ref="svg"
  >
    <svg
      style="display: block; width: 100%; height: auto;"
      :width="width"
      :height="width"
      :view-box.camel="viewBox"
    >
      <slot />
    </svg>
  </div>
  `
};

export const FCircle = {
  props: { r: { default: 10 } },
  setup() {
    const svgUnit = inject("svgUnit");
    return { svgUnit };
  },
  template: `
    <circle 
      cx="0"
      cy="0"
      :r="r"
      fill="none"
      stroke="black"
      :stroke-width="svgUnit"
    ></circle>`
};
