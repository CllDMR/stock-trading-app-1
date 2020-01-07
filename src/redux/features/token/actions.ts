import { SetAction } from "@typings/Token";
import { Token_SET } from "@constants/Token";

export const setToken: SetAction = () => ({
  type: Token_SET
});

export default {
  setToken
};
