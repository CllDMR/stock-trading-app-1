import { createStackNavigator } from "react-navigation-stack";

import ConnectedPortfolioScreen from "@connected/screens/Portfolio";

export default createStackNavigator(
  {
    Portfolio: ConnectedPortfolioScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
