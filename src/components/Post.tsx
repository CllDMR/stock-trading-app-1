import React, { FC } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { PostDataType } from "../typings/Post";
// import { Colors } from "../constants/Theme";

const { width } = Dimensions.get("window");

export type PostProps = {} & PostDataType;

export const Post: FC<PostProps> = ({ type, mainTitle, regularData, date }) => {
  switch (type) {
    case "regular":
      return (
        <View style={styles.container}>
          <Text>{mainTitle}</Text>
          <Text>{regularData?.text}</Text>
          <View style={styles.bottomContainer}>
            <View style={styles.iconsContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome name="heart" size={15} />
              </View>
              <View
                style={[
                  styles.iconContainer,
                  { transform: [{ rotateY: "180deg" }] }
                ]}
              >
                <FontAwesome name="comment" size={15} />
              </View>
              <View style={styles.iconContainer}>
                <FontAwesome name="share" size={15} />
              </View>
            </View>
            <Text style={styles.dateText}>{date.fromNow()}</Text>
          </View>
        </View>
      );
    case "stock":
      return (
        <View style={styles.container}>
          <Text>{mainTitle}</Text>
          <Text style={{ color: "red" }}>{}</Text>
        </View>
      );

    default:
      return null;
  }
};

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    padding: 10,
    marginVertical: 10,
    borderRadius: 2,
    backgroundColor: "white"
  },
  bottomContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  iconsContainer: {
    flexDirection: "row"
  },
  iconContainer: {
    marginHorizontal: 15
  },
  dateText: {},
  text: {}
});

export default Post;
