import { get } from "../baseRequest";

export const getCards = () => {
  return get("processCards");
};

export const getTableData = () => {
  return get("tabledata");
};
