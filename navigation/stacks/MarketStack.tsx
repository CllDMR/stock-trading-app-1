import { createStackNavigator } from "react-navigation-stack";

import MarketScreen from "../../screens/Market";

const MarketStack = createStackNavigator(
  {
    Market: MarketScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default MarketStack;
