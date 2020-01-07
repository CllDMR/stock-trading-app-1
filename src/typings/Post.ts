import {
  Post_GET_ALL_DONE,
  Post_GET_ALL_START,
  Post_GET_ALL_CANCEL,
  Post_GET_ALL_ERROR,
  Post_SELECT_TOPIC
} from "@constants/Post";
import { Moment } from "moment";

export type PostDataType = {
  id: string;
  type: "regular" | "stock";
  likes: number;
  comments: number;
  shares: number;
  date: Moment;
  mainTitle: string;
  regularData?: { text: string };
  stockData?: {
    title: string;
    price: number;
    deltaPrice: number;
    delta: number;
  };
};

export type TopicType = {
  index: number;
  value: string;
  label: string;
};

export type PostState = {
  topics: TopicType[];
  selectedTopic: TopicType;
  datas: PostDataType[][];
};

export type PostTypes =
  | typeof Post_GET_ALL_DONE
  | typeof Post_GET_ALL_START
  | typeof Post_GET_ALL_CANCEL
  | typeof Post_GET_ALL_ERROR
  | typeof Post_SELECT_TOPIC;

export type PostActions = GetAllAction | SelectTopicAction;

export type GetAllAction = () => {
  type: typeof Post_GET_ALL_START;
};

export type SelectTopicAction = (payload: {
  topic: TopicType;
}) => {
  type: typeof Post_SELECT_TOPIC;
  payload: { topic: TopicType };
};
