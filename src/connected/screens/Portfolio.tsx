import { connect } from "react-redux";
import PortfolioScreen from "@screens/Portfolio";
// import { RootState } from "@typings/MyRedux";

// const mapStateToProps = (state: RootState) => ({});
const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioScreen);
