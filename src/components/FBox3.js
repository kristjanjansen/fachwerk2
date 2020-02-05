import {
  watch,
  inject
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import {
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from "https://unpkg.com/three@0.113.2/build/three.module.js";

import { deg2rad } from "https://designstem.github.io/fachwerk/fachwerk.js";

export const FBox3 = {
  props: { rotation: { default: 0 } },
  setup(props) {
    const scene = inject("scene");
    var geometry = new BoxGeometry();
    var material = new MeshBasicMaterial({ color: "red" });
    var cube = new Mesh(geometry, material);
    scene.add(cube);
    watch(
      () => props.rotation,
      rotation => {
        cube.rotation.x = deg2rad(rotation);
        cube.rotation.y = deg2rad(rotation);
        cube.rotation.z = deg2rad(rotation);
      }
    );
    return () => null;
  }
};
