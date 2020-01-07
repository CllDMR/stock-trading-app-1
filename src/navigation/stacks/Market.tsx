import { createStackNavigator } from "react-navigation-stack";

import ConnectedMarketScreen from "@connected/screens/Market";

export default createStackNavigator(
  {
    Market: ConnectedMarketScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
