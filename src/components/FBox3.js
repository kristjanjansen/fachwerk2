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

import { stylingProps, useMaterial3d } from "../libs/styling.js";
import { transform2dProps, useTransform2d } from "../libs/transforms.js";

export const FBox3 = {
  props: { r: { default: 1 }, ...transform2dProps, ...stylingProps },
  setup(props) {
    const scene = inject("scene");

    const geometry2 = new BoxGeometry(props.r, props.r, props.r);

    const material2 = new MeshLambertMaterial({
      color: "red",
      opacity: 1
      // side: DoubleSide
    });

    const { fill, stroke } = useMaterial3d(props);

    const cube2 = new Mesh(geometry2, fill.value);
    scene.add(cube2);

    const geometry = new BoxBufferGeometry(props.r, props.r, props.r);
    const edges = new EdgesGeometry(geometry);
    const cube = new LineSegments(edges, stroke.value);
    scene.add(cube);

    // watch(
    //   () => props.r,
    //   r => {
    //     cube2.rotation.x = deg2rad(r);
    //     cube2.rotation.y = deg2rad(r);
    //     cube2.rotation.z = deg2rad(r);
    //     // cube.rotation.x = deg2rad(r);
    //     // cube.rotation.y = deg2rad(r);
    //     // cube.rotation.z = deg2rad(r);
    //   }
    // );
    return () => null;
  }
};
