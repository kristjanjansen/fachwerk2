// import {
//   inject,
//   provide,
//   watch,
//   ref,
//   onMounted
// } from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

// const StoreSymbol = Symbol();

// export function provideStore(store) {
//   provide(StoreSymbol, store);
// }

// export function useStore() {
//   const store = inject(StoreSymbol);
//   if (!store) {
//     // throw error, no store provided
//   }
//   return store;
// }

// export const FTest1 = {
//   setup() {
//     const a = ref(null);
//     provideStore(a);
//     onMounted(() => setTimeout(() => (a.value = "ohoo"), 1000));
//   },
//   template: "<div><slot /></div>"
// };

// export const FTest2 = {
//   setup() {
//     const b = useStore();
//     watch(() => {
//       console.log(b.value);
//     });
//   },
//   template: "<div>aaa</div>"
// };
