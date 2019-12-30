import { createStackNavigator } from "react-navigation-stack";

import ProfileScreen from "../../screens/Profile";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default ProfileStack;
