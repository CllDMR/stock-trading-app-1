import { ExampleState } from "@typings/Example";
import * as ExampleConstants from "@constants/Example";
import { RootActionTypes } from "@typings/MyRedux";

const initialState: ExampleState = {};

export default (
  state = initialState,
  action: RootActionTypes
): ExampleState => {
  switch (action.type) {
    case ExampleConstants.Example_GET_ONE_START:
      return { ...state };
    default:
      return { ...state };
  }
};
