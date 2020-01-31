import {
  inject,
  watch,
  ref
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from "https://unpkg.com/three@0.113.2/build/three.module.js";

export const FBox3 = {
  setup() {
    const scene = inject("a");
    const added = ref(false);
    watch(() => {
      if (scene.value && !added.value) {
        const geometry = new BoxGeometry();
        const material = new MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new Mesh(geometry, material);
        scene.value.add(cube);
        added.value = true;
      }
    });
    // onMounted(() => {
    //   const scene = inject("a");
    //   console.log(scene);
    // });
    // var geometry = new BoxGeometry();
    // var material = new MeshBasicMaterial({ color: 0x00ff00 });
    // var cube = new Mesh(geometry, material);
    // scene.add(cube);

    return () => null;
  }
  //template: "<div>aaa</div>"
};
