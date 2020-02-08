import {
  watch,
  inject
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import {
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from "https://unpkg.com/three@0.113.2/build/three.module.js";

import { deg2rad } from "../utils.js";

export const FBox3 = {
  props: { r: { default: 0 } },
  setup(props) {
    const scene = inject("scene");
    var geometry = new BoxGeometry();
    var material = new MeshBasicMaterial({ color: "red" });
    var cube = new Mesh(geometry, material);
    scene.add(cube);
    watch(
      () => props.r,
      r => {
        cube.rotation.x = deg2rad(r);
        cube.rotation.y = deg2rad(r);
        cube.rotation.z = deg2rad(r);
      }
    );
    return () => null;
  }
};
