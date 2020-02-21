import { provide, ref, onMounted, onBeforeUpdate } from "../deps/vue.js";

import {
  Scene,
  PerspectiveCamera,
  Color,
  AmbientLight,
  DirectionalLight,
  WebGLRenderer
} from "../deps/three.js";

import { SVGRenderer } from "../deps/svgrenderer.js";

export const FSceneThree = {
  props: {
    renderer: {
      default: "svg",
      type: String
    }
  },
  setup(props) {
    const node = ref(null);

    const scene = new Scene();
    scene.background = new Color("white");

    // const ambientLight = new AmbientLight("white", 0.1);
    // scene.add(ambientLight);

    const directionalLight = new DirectionalLight("white", 1);
    directionalLight.position.set(0, 0, 10);

    scene.add(directionalLight);
    scene.position.set(0, 0, 0);
    const camera = new PerspectiveCamera(100, 200 / 200, 0.1, 1000);
    camera.position.z = 80;

    const renderer =
      props.renderer == "webgl" ? new WebGLRenderer() : new SVGRenderer();
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
  template: `
    <div class="f-scene-three" ref="node">
      <slot />
    </div>
  `,
  css: /*css*/ `
    .f-scene-three > * {
      border: 1px solid red;
      display: block;
    }
  `
};
