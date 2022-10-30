import { get } from "../baseRequest";

export const getUser = () => {
  return get("users/1");
};
