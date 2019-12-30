import React from "react";
import {
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation-tabs";

import FeedStack from "./main_stacks/FeedStack";
import VideoStack from "./main_stacks/VideoStack";
import NotificationStack from "./main_stacks/NotificationStack";
import ProfileStack from "./main_stacks/ProfileStack";

export default createBottomTabNavigator(
  {
    Feed: FeedStack,
    Video: VideoStack,
    Notification: NotificationStack,
    Profile: ProfileStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Feed")
          return (
            <MaterialIcons name={`subscriptions`} size={25} color={tintColor} />
          );
        else if (routeName === "Video")
          return <Entypo name={`youtube`} size={25} color={tintColor} />;
        else if (routeName === "Notification")
          return (
            <Ionicons name={`ios-notifications`} size={25} color={tintColor} />
          );
        else if (routeName === "Profile")
          return (
            <MaterialCommunityIcons
              name={`account`}
              size={25}
              color={tintColor}
            />
          );
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "gray",
      showLabel: false,
      activeBackgroundColor: "black",
      inactiveBackgroundColor: "black",
      style: { borderTopWidth: 0 }
    }
  }
);
