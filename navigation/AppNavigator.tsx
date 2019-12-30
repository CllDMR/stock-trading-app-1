import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Main from "./Main";
import Auth from "./Auth";

export default createAppContainer(
  createSwitchNavigator({
    Auth,
    Main
  })
);
