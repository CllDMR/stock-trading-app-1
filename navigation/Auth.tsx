import { createStackNavigator } from "react-navigation-stack";

import Login from "../screens/Login";
import Register from "../screens/Register";

export default createStackNavigator(
  {
    Login,
    Register
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
0;
