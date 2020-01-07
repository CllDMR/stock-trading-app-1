import { connect } from "react-redux";
import MarketScreen from "@screens/Market";
// import { RootState } from "@typings/MyRedux";

// const mapStateToProps = (state: RootState) => ({});
const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MarketScreen);
