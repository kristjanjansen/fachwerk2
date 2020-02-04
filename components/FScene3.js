import {
  inject,
  provide,
  watch,
  ref,
  onMounted
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import { scene, camera, renderer } from "../utils/scene3.js";

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from "https://unpkg.com/three@0.113.2/build/three.module.js";

import { SVGRenderer } from "./FScene3/SVGRenderer.js";

export const FScene3 = {
  setup() {
    const node = ref(null);
    onMounted(() => {
      node.value.appendChild(renderer.domElement);
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    });
    return { node };
  },
  template: `<div ref="node"><slot /></div>`
};
