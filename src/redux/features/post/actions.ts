import { GetAllAction, SelectTopicAction } from "@typings/Post";
import { Post_GET_ALL_START, Post_SELECT_TOPIC } from "@constants/Post";

export const getAll: GetAllAction = () => ({
  type: Post_GET_ALL_START
});

export const selectTopic: SelectTopicAction = payload => ({
  type: Post_SELECT_TOPIC,
  payload
});

export default {
  getAll,
  selectTopic
};
