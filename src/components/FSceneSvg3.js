import { provide, ref, onMounted, onBeforeUpdate } from "../deps/vue.js";

import {
  Scene,
  PerspectiveCamera,
  Color,
  AmbientLight,
  DirectionalLight,
  WebGLRenderer,
  SVGRenderer
} from "../deps/three.js";

export const FSceneSvg3 = {
  setup() {
    const node = ref(null);

    const scene = new Scene();
    //scene.background = new Color("white");

    // const ambientLight = new AmbientLight("white", 0.1);
    // scene.add(ambientLight);

    const directionalLight = new DirectionalLight("white");
    directionalLight.position.set(0, 0, 2);
    scene.add(directionalLight);

    const camera = new PerspectiveCamera(75, 200 / 200, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new SvgRenderer();
    renderer.setSize(200, 200);
    renderer.setPixelRatio(
      window.devicePixelRatio ? window.devicePixelRatio : 1
    );

    provide("scene", scene);

    onMounted(() => {
      node.value.append(renderer.domElement);
      renderer.render(scene, camera);
    });

    onBeforeUpdate(() => {
      renderer.render(scene, camera);
    });

    return { node };
  },
  template: `<div ref="node"><slot /></div>`
};
