import {
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from "https://unpkg.com/three@0.113.2/build/three.module.js";

import { scene, camera, renderer } from "../../utils/scene3.js";

export const FBox3 = {
  setup() {
    var geometry = new BoxGeometry();
    var material = new MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new Mesh(geometry, material);
    scene.add(cube);
  },
  template: "<div>aaa</div>"
};
