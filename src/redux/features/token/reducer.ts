import { TokenState } from "@typings/Token";
import * as TokenConstants from "@constants/Token";
import { RootActionTypes } from "@typings/MyRedux";

const initialState: TokenState = {};

export default (state = initialState, action: RootActionTypes): TokenState => {
  switch (action.type) {
    case TokenConstants.Token_SET:
      return { ...state };
    default:
      return { ...state };
  }
};
