import {
  watch,
  inject
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import {
  BoxGeometry,
  MeshLambertMaterial,
  MeshBasicMaterial,
  DoubleSide,
  Mesh,
  BoxBufferGeometry,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments
} from "https://unpkg.com/three@0.113.2/build/three.module.js";

import { deg2rad } from "../utils.js";

export const FBox3 = {
  props: { r: { default: 0 } },
  setup(props) {
    const scene = inject("scene");

    var geometry2 = new BoxGeometry(1, 1, 1);

    const material2 = new MeshLambertMaterial({
      color: "red",
      opacity: 1
      // side: DoubleSide
    });

    //const material2 = new MeshBasicMaterial({ color: "red", opacity: 1 });

    const cube2 = new Mesh(geometry2, material2);
    scene.add(cube2);

    // const geometry = new BoxBufferGeometry(1.1, 1, 1);
    // const edges = new EdgesGeometry(geometry);
    // const material = new LineBasicMaterial({
    //   color: "black",
    //   linewidth: 3,
    //   linecap: "round",
    //   linejoin: "round",
    //   opacity: 1
    // });
    // const cube = new LineSegments(edges, material);
    // scene.add(cube);

    watch(
      () => props.r,
      r => {
        cube2.rotation.x = deg2rad(r);
        cube2.rotation.y = deg2rad(r);
        cube2.rotation.z = deg2rad(r);
        // cube.rotation.x = deg2rad(r);
        // cube.rotation.y = deg2rad(r);
        // cube.rotation.z = deg2rad(r);
      }
    );
    return () => null;
  }
};
