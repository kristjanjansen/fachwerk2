// import {
//   inject,
//   provide,
//   watch,
//   ref,
//   onMounted
// } from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

// import { scene, camera, renderer } from "./FScene3/scene3.js/index.js";

// import {
//   Scene,
//   PerspectiveCamera,
//   WebGLRenderer,
//   BoxGeometry,
//   MeshBasicMaterial,
//   Mesh
// } from "https://unpkg.com/three@0.113.2/build/three.module.js";

// export const FTest1 = {
//   setup() {
//     const node = ref(null);
//     onMounted(() => {
//       node.value.appendChild(renderer.domElement);
//       //renderer.render(scene, camera);
//       const animate = () => {
//         requestAnimationFrame(animate);
//         renderer.render(scene, camera);
//       };
//       animate();
//     });
//     return { node };
//   },
//   template: `<div ref="node"><slot /></div>`
// };

// export const FTest2 = {
//   setup() {
//     var geometry = new BoxGeometry();
//     var material = new MeshBasicMaterial({ color: 0x00ff00 });
//     var cube = new Mesh(geometry, material);
//     scene.add(cube);
//   },
//   template: "<div>aaa</div>"
// };
