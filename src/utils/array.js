export const padArrayRight = (arr, length, fill) => {
  return [...arr, ...Array(length).fill(fill)].slice(0, length);
};

export const padArrayRight_empty_test = () => {
  return [padArrayRight([], 2, "a"), ["a", "a"]];
};

export const padArrayRight_existing_test = () => {
  return [padArrayRight(["a"], 2, "b"), ["a", "b"]];
};
