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
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

type Props = {
  navigation: NavigationStackProp;
};

export class Login extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.container, { padding: 35 }]}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../assets/images/tesla.gif")}
          />

          <Text style={styles.mainText}>Welcome Back,</Text>
          <Text style={styles.subText}>sign in to continue watching.</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={{
                fontSize: 20,
                color: "rgba(155,155,155,1.0)"
                // marginBottom: 20
              }}
              placeholder="Email ID"
              placeholderTextColor="rgba(155,155,155,1.0)"
            />
            <View
              style={{
                marginTop: 10,
                marginBottom: 30,
                width: "100%",
                height: 2,
                backgroundColor: "rgba(155,155,155,1.0)"
              }}
            />
            <TextInput
              style={{
                fontSize: 20,
                color: "rgba(155,155,155,1.0)"
              }}
              placeholder="Password"
              placeholderTextColor="rgba(155,155,155,1.0)"
            />
            <View
              style={{
                marginTop: 10,
                width: "100%",
                height: 2,
                backgroundColor: "rgba(155,155,155,1.0)"
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              flex={false}
              center
              middle
              borderRadius={50}
              color="red"
              textStyle={{
                color: "rgb(230,230,230)",
                fontSize: 20,
                fontWeight: "700",
                marginVertical: 20
              }}
              onPress={() => {
                this.props.navigation.navigate("Feed");
              }}
            >
              LOG ME IN
            </Button>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableWithoutFeedback
              hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
              onPress={() => {
                // alert("asdads");
                this.props.navigation.navigate("Register");
              }}
            >
              <Text style={styles.bottomText1}>sign up,</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.bottomText2}>if you're new</Text>
          </View>
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
  mainText: { color: "white", fontSize: 30, marginBottom: 15 },
  subText: { color: "rgba(155,155,155,1.0)", fontSize: 20, marginBottom: 15 },
  inputText: { color: "rgba(155,155,155,1.0)", fontSize: 20, marginBottom: 15 },
  bottomText1: {
    color: "white",
    fontSize: 16,
    marginRight: 5
  },
  bottomText2: {
    color: "rgba(155,155,155,1.0)",
    fontSize: 16
  },
  logo: {
    width: width / 4,
    height: 50,
    marginBottom: 20
  },
  inputContainer: { flex: 1, justifyContent: "center" },
  buttonContainer: { flex: 0.5, justifyContent: "flex-start" },
  bottomContainer: { flexDirection: "row" }
});

export default Login;
