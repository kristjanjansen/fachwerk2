export const padArrayRight = (arr, length, fill) => {
  return [...arr, ...Array(length).fill(fill)].slice(0, length);
};

export const padArrayRight_test = () => {
  const a = "1";
  const b = "2";
  return [a, b];
};
