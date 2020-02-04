import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from "https://unpkg.com/three@0.113.2/build/three.module.js";

const scene = new Scene();
const camera = new PerspectiveCamera(75, 300 / 200, 0.1, 1000);
camera.position.z = 5;

const renderer = new WebGLRenderer();
renderer.setSize(300, 200);
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);

export { scene, camera, renderer };
