import {
  Scene,
  PerspectiveCamera,
  Color,
  AmbientLight,
  DirectionalLight,
  WebGLRenderer
} from "https://unpkg.com/three@0.113.2/build/three.module.js";

import { SVGRenderer } from "https://unpkg.com/three@0.113.2/examples/jsm/renderers/SVGRenderer.js";

const scene = new Scene();
scene.background = new Color("white");

// const ambientLight = new AmbientLight("white", 0.1);
// scene.add(ambientLight);

const directionalLight = new DirectionalLight("white");
directionalLight.position.set(0, 0, 2);
scene.add(directionalLight);

const camera = new PerspectiveCamera(75, 300 / 300, 0.1, 1000);
camera.position.z = 10;

//const renderer = new WebGLRenderer();
const renderer = new SVGRenderer();

renderer.setSize(300, 300);
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);

export { scene, camera, renderer };
