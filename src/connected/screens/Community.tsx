import { connect } from "react-redux";
import CommunityScreen from "@screens/Community";
// import { RootState } from "@typings/MyRedux";

// const mapStateToProps = (state: RootState) => ({});
const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CommunityScreen);
