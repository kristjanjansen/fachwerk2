export const useFetch = src => {
  const data = ref("");
  if (src) {
    onMounted(() => {
      fetch("./index.md")
        .then(res => res.text())
        .then(res => {
          data.value = res;
        });
    });
  }
  return { data };
};
