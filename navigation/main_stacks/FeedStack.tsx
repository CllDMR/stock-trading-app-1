import { createStackNavigator } from "react-navigation-stack";

import FeedScreen from "../../screens/Feed";
import MovieScreen from "../../screens/Movie";

const FeedStack = createStackNavigator(
  {
    Feed: FeedScreen,
    Movie: MovieScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default FeedStack;
