import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { StackHeader } from "@components";

type Props = {
  navigation: NavigationStackProp;
};

type State = {};

class PortfolioScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#393939" />
        <StackHeader title="My Portfolio" />
        <View style={styles.container}>
          <Text style={styles.text}>Portfolio Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#393939"
  },
  container: {
    flex: 1,
    backgroundColor: "rgb(230,230,230)",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {}
});

export default PortfolioScreen;
