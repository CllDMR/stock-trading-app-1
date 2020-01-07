import { createStackNavigator } from "react-navigation-stack";

import ConnectedFeedScreen from "@connected/screens/Feed";

export default createStackNavigator(
  {
    Feed: ConnectedFeedScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
