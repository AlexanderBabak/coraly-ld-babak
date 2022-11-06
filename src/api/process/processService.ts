import { get } from "../baseRequest";

export const getCards = () => {
  return get("processCards");
};
