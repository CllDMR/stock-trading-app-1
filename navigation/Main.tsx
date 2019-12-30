import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation-tabs";

import FeedStack from "./stacks/FeedStack";
import MarketStack from "./stacks/MarketStack";
import CommunityStack from "./stacks/CommunityStack";
import PortfolioStack from "./stacks/PortfolioStack";

export default createBottomTabNavigator(
  {
    Feed: FeedStack,
    Market: MarketStack,
    Community: CommunityStack,
    Portfolio: PortfolioStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Feed")
          return (
            <MaterialIcons name={`subscriptions`} size={25} color={tintColor} />
          );
        else if (routeName === "Market")
          return (
            <MaterialIcons name={`subscriptions`} size={25} color={tintColor} />
          );
        else if (routeName === "Community")
          return (
            <MaterialIcons name={`subscriptions`} size={25} color={tintColor} />
          );
        else if (routeName === "Portfolio")
          return (
            <MaterialIcons name={`subscriptions`} size={25} color={tintColor} />
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
