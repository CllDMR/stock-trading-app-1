import { createStackNavigator } from "react-navigation-stack";

import NotificationScreen from "../../screens/Notification";

const NotificationStack = createStackNavigator(
  {
    Notification: NotificationScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default NotificationStack;
