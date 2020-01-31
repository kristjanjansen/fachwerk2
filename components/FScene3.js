import {
  ref,
  onMounted,
  provide
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from "https://unpkg.com/three@0.113.2/build/three.module.js";

export const FScene3 = {
  setup() {
    const node = ref(null);
    const scene = ref(null);
    //provide("a", scene);
    onMounted(() => {
      scene.value = new Scene();
      const camera = new PerspectiveCamera(75, 300 / 200, 0.1, 1000);
      const renderer = new WebGLRenderer();
      renderer.setSize(300, 200);
      node.value.appendChild(renderer.domElement);

      var geometry = new BoxGeometry();
      var material = new MeshBasicMaterial({ color: 0x00ff00 });
      var cube = new Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      renderer.render(scene, camera);
      // var animate = function() {
      //   requestAnimationFrame(animate);
      //   cube.rotation.x += 0.01;
      //   cube.rotation.y += 0.01;
      //   renderer.render(scene, camera);
      // };
      // animate();
    });
    return { node };
  },
  template: `<div ref="node"><slot /></div>`
};
