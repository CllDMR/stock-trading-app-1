import { createStackNavigator } from "react-navigation-stack";

import ConnectedCommunityScreen from "@connected/screens/Community";

export default createStackNavigator(
  {
    Community: ConnectedCommunityScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
