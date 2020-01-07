import React from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation-tabs";

import FeedStack from "./Feed";
import MarketStack from "./Market";
import CommunityStack from "./Community";
import PortfolioStack from "./Portfolio";

export default createBottomTabNavigator(
  {
    Market: MarketStack,
    Feed: FeedStack,
    Community: CommunityStack,
    Portfolio: PortfolioStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor, focused }) => {
        const { routeName } = navigation.state;
        if (routeName === "Feed")
          return (
            <FontAwesome
              name={`feed`}
              size={focused ? 25 : 20}
              color={tintColor}
            />
          );
        else if (routeName === "Market")
          return (
            <FontAwesome
              name={`bank`}
              size={focused ? 25 : 20}
              color={tintColor}
            />
          );
        else if (routeName === "Community")
          return (
            <MaterialIcons
              name={`subscriptions`}
              size={focused ? 25 : 20}
              color={tintColor}
            />
          );
        else if (routeName === "Portfolio")
          return (
            <MaterialIcons
              name={`subscriptions`}
              size={focused ? 25 : 20}
              color={tintColor}
            />
          );

        return null;
      }
    }),
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "gray",
      showLabel: false,
      activeBackgroundColor: "white",
      inactiveBackgroundColor: "white",
      style: {
        borderTopWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4
      }
    }
  }
);
