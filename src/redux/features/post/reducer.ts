import moment from "moment";
import { PostState, PostDataType } from "@typings/Post";
import { Post_GET_ALL_START, Post_SELECT_TOPIC } from "@constants/Post";
import { RootActionTypes } from "@typings/MyRedux";

const createPostDatas = (count: number, topicName: string): PostDataType[] => {
  let postDatas: PostDataType[] = [];

  for (let index = 0; index < count; index++) {
    postDatas.push({
      id: `post-${index + 1}`,
      type: "regular",
      likes: 10,
      comments: 12,
      shares: 5,
      date: moment()
        .utc()
        .add(-(Math.random() * 60 - 1), "minutes"),
      mainTitle: "Main Title",
      regularData: {
        text: `Regular post ${topicName} adsadsasdadsdas`
      }
    });
  }

  return postDatas;
};

const initialState: PostState = {
  topics: [
    { index: 0, value: "trend", label: "Trend" },
    { index: 1, value: "hot", label: "Hot" },
    { index: 2, value: "best", label: "Best" }
  ],
  selectedTopic: { index: 0, value: "trend", label: "Trend" },
  datas: [
    createPostDatas(25, "Trend"),
    createPostDatas(25, "Hot"),
    createPostDatas(25, "Best")
  ]
};

export default (state = initialState, action: RootActionTypes): PostState => {
  switch (action.type) {
    case Post_GET_ALL_START:
      return { ...state };
    case Post_SELECT_TOPIC:
      return { ...state, selectedTopic: action.payload.topic };
    default:
      return { ...state };
  }
};
