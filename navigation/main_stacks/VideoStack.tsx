import { createStackNavigator } from "react-navigation-stack";

import VideoScreen from "../../screens/Video";

const VideoStack = createStackNavigator(
  {
    Video: VideoScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default VideoStack;
