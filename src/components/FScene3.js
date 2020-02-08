import {
  inject,
  provide,
  watch,
  ref,
  onMounted,
  onBeforeUpdate
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import { scene, camera, renderer } from "../utils/scene3.js";

export const FScene3 = {
  setup() {
    const node = ref(null);
    provide("scene", scene);
    onMounted(() => {
      node.value.appendChild(renderer.domElement);
      renderer.render(scene, camera);
    });
    onBeforeUpdate(() => {
      renderer.render(scene, camera);
    });
    return { node };
  },
  template: `<div ref="node"><slot /></div>`
};
