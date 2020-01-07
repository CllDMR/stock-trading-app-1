import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import FeedScreen from "@screens/Feed";
import { RootState } from "@typings/MyRedux";
import { selectTopic } from "@post-actions";

const mapStateToProps = (state: RootState) => ({
  topics: state.post.topics,
  selectedTopic: state.post.selectedTopic,
  posts: state.post.datas[state.post.selectedTopic.index]
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectTopic: bindActionCreators(selectTopic, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
