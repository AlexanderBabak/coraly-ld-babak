export const getFirstChairs = (str) => {
  return str.split(" ").reduce((acc, elem) => {
    return acc + elem[0];
  }, "");
};
