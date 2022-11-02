export const getFirstChairs = (str: string): string => {
  return str.split(" ").reduce((acc, elem) => {
    return acc + elem[0];
  }, "");
};
