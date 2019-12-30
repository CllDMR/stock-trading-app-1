import { createStackNavigator } from "react-navigation-stack";

import CommunityScreen from "../../screens/Community";

const CommunityStack = createStackNavigator(
  {
    Community: CommunityScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default CommunityStack;
