import { createStackNavigator } from "react-navigation-stack";

import FeedScreen from "../../screens/Feed";

const FeedStack = createStackNavigator(
  {
    Feed: FeedScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default FeedStack;
