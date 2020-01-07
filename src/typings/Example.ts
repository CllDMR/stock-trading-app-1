import {
  Example_GET_ALL_DONE,
  Example_GET_ALL_START,
  Example_GET_ALL_CANCEL,
  Example_GET_ALL_ERROR,
  Example_GET_ONE_DONE,
  Example_GET_ONE_START,
  Example_GET_ONE_CANCEL,
  Example_GET_ONE_ERROR,
  Example_POST_DONE,
  Example_POST_START,
  Example_POST_CANCEL,
  Example_POST_ERROR
} from "@constants/Example";

export type ExampleDataType = {};

export type ExampleState = {};

export type ExampleTypes =
  | typeof Example_GET_ALL_DONE
  | typeof Example_GET_ALL_START
  | typeof Example_GET_ALL_CANCEL
  | typeof Example_GET_ALL_ERROR
  | typeof Example_GET_ONE_DONE
  | typeof Example_GET_ONE_START
  | typeof Example_GET_ONE_CANCEL
  | typeof Example_GET_ONE_ERROR
  | typeof Example_POST_DONE
  | typeof Example_POST_START
  | typeof Example_POST_CANCEL
  | typeof Example_POST_ERROR;

export type ExampleActions = GetOneAction | PostAction;

export type GetOneAction = () => {
  type: typeof Example_GET_ONE_START;
};

export type PostAction = (
  payload: ExampleDataType
) => {
  type: typeof Example_POST_START;
  payload: ExampleDataType;
};
