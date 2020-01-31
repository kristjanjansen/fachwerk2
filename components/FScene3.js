import {
  ref,
  onMounted
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from "https://unpkg.com/three@0.113.2/build/three.module.js";

console.log(Scene);

export const FScene3 = {
  setup() {
    const threeNode = ref(null);
    onMounted(() => {
      const scene = new Scene();
      const camera = new PerspectiveCamera(75, 300 / 200, 0.1, 1000);
      const renderer = new WebGLRenderer();
      renderer.setSize(300, 200);
      threeNode.value.appendChild(renderer.domElement);

      var geometry = new BoxGeometry();
      var material = new MeshBasicMaterial({ color: 0x00ff00 });
      var cube = new Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      var animate = function() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    });
    return { threeNode };
  },
  template: `<div ref="threeNode"><div>a</div></div>`
};
