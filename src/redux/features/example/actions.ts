import { GetOneAction, PostAction } from "@typings/Example";
import { Example_GET_ONE_START, Example_POST_START } from "@constants/Example";

export const getOne: GetOneAction = () => ({
  type: Example_GET_ONE_START
});

export const post: PostAction = payload => ({
  type: Example_POST_START,
  payload
});

export default {
  getOne,
  post
};
