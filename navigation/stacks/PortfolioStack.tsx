import { createStackNavigator } from "react-navigation-stack";

import PortfolioScreen from "../../screens/Portfolio";

const PortfolioStack = createStackNavigator(
  {
    Portfolio: PortfolioScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default PortfolioStack;
