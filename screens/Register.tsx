import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput
} from "react-native";

import Button from "../components/Button";
import { NavigationStackProp } from "react-navigation-stack";

const { height, width } = Dimensions.get("window");

type Props = {
  navigation: NavigationStackProp;
};

export class Register extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={[
            styles.container,
            { justifyContent: "center", alignItems: "center", padding: 35 }
          ]}
        >
          <Text style={styles.text}>Register Screen</Text>
          <Button
            flex={false}
            center
            middle
            borderRadius={50}
            color="red"
            width="100%"
            textStyle={{
              color: "rgb(230,230,230)",
              fontSize: 20,
              fontWeight: "700",
              marginVertical: 20
            }}
            onPress={() => {
              this.props.navigation.pop();
            }}
          >
            Back
          </Button>
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
  text: {
    color: "white"
  }
});

export default Register;
