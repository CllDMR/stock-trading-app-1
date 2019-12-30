import React, { Component } from "react";
import { Dimensions, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

const { height, width } = Dimensions.get("window");

type Props = {
  navigation: NavigationStackProp;
};

type State = {};

export class FeedScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={[
            styles.container,
            { justifyContent: "center", alignItems: "center" }
          ]}
        >
          <Text style={styles.text}>Feed Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  text: { color: "white" }
});

export default FeedScreen;
