import React from "react";
import { Platform, StatusBar, StyleSheet, View, Image } from "react-native";
import { AppLoading, SplashScreen } from "expo";
import { Asset } from "expo-asset";
import AppNavigator from "./navigation/AppNavigator";

type Props = {};

type State = {
  isSplashReady: boolean;
  isAppReady: boolean;
};

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isSplashReady: false,
      isAppReady: false
    };
  }

  render() {
    if (!this.state.isSplashReady) {
      return (
        <AppLoading
          startAsync={this._cacheSplashResourcesAsync}
          onFinish={() => this.setState({ isSplashReady: true })}
          onError={console.warn}
          autoHideSplash={false}
        />
      );
    }

    if (!this.state.isAppReady) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("./assets/images/icon.png")}
            onLoad={this._cacheResourcesAsync}
          />
        </View>
      );
    }

    return (
      <>
        {Platform.OS === "ios" && <StatusBar barStyle="light-content" />}
        <AppNavigator />
      </>
    );
  }

  _cacheSplashResourcesAsync = async () => {
    const gif = require("./assets/images/tesla.gif");
    return Asset.fromModule(gif).downloadAsync();
  };

  _cacheResourcesAsync = async () => {
    SplashScreen.hide();
    const images = [
      require("./assets/images/icon.png"),
      require("./assets/images/splash.png")
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
    this.setState({ isAppReady: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
