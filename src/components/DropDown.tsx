import React, { FC, useState } from "react";
import {
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons
} from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  StyleProp,
  ViewStyle,
  Easing
} from "react-native";

const TurningView: FC<{ style?: StyleProp<ViewStyle>; turnValue: number }> = ({
  children,
  style = {},
  turnValue
}) => {
  const [turnAnim] = useState(new Animated.Value(turnValue)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(turnAnim, {
      toValue: turnValue,
      duration: 200,
      easing: Easing.linear
    }).start();
  });

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [
            {
              rotateX: turnAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "180deg"]
              })
            }
          ]
        }
      ]}
    >
      {children}
    </Animated.View>
  );
};

const renderIcons = (value: string) => {
  switch (value) {
    case "trend":
      return <Feather name="trending-up" size={20} />;

    case "hot":
      return <MaterialCommunityIcons name="fire" size={20} />;

    case "best":
      return <AntDesign name="star" size={20} />;

    default:
      return <Feather name="trending-up" size={20} />;
  }
};

export type DropDownProps = {
  open: 0 | 1;
  title: string;
  value: string;
  options: string[];
  setOpen: (open: 0 | 1) => void;
  onPressElement: (value: string) => void;
};

export const DropDown: FC<DropDownProps> = ({
  open,
  title,
  value,
  options,
  setOpen,
  onPressElement
}) => {
  const [opacityAnim] = useState(new Animated.Value(open)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: open,
      duration: 200,
      easing: Easing.linear
    }).start();
  });
  const opacity = opacityAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setOpen(open === 0 ? 1 : 0)}>
        <View style={styles.topContainer}>
          {renderIcons(value)}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <TurningView style={{ marginLeft: 25 }} turnValue={open}>
            <Ionicons name="ios-arrow-down" />
          </TurningView>
        </View>
      </TouchableWithoutFeedback>

      <View
        style={{
          position: "relative",
          alignItems: "center"
        }}
      >
        <Animated.View
          style={[
            styles.listContainer,
            { display: open === 0 ? "none" : "flex" },
            {
              opacity
            }
          ]}
        >
          {options.map((option, index) => {
            return index !== options.length - 1 ? (
              <TouchableWithoutFeedback
                key={`option-${index}`}
                onPress={() => {
                  onPressElement(option);
                  setOpen(open === 0 ? 1 : 0);
                }}
              >
                <View
                  style={[
                    styles.listElem,
                    {
                      borderBottomColor: "rgb(200,200,200)",
                      borderBottomWidth: 2,
                      borderStyle: "solid"
                    }
                  ]}
                >
                  <Text>{option}</Text>
                </View>
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                key={`option-${index}`}
                onPress={() => {
                  onPressElement(option);
                  setOpen(open === 0 ? 1 : 0);
                }}
              >
                <View
                  key={`option-${index}`}
                  style={[
                    styles.listElem,
                    {
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15
                    }
                  ]}
                >
                  <Text>{option}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    width: "100%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  topContainer: {
    alignItems: "center",
    flexDirection: "row",
    padding: 20
  },
  titleContainer: { marginLeft: 7 },
  titleText: { fontSize: 17 },
  listContainer: {
    width: "70%",
    position: "absolute",
    backgroundColor: "white",
    paddingHorizontal: 5,
    paddingBottom: 5,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  listElem: {
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "rgb(230,230,230)"
  }
});

export default DropDown;
