export const useArray = (data) => {
  const arr = Array(data)
    .fill(0)
    .map((e, i) => i + 1);

  return arr;
};
