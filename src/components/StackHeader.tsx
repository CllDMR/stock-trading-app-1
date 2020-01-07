import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

export type StackHeaderProps = {
  title: string;
};

export const StackHeader: FC<StackHeaderProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={20} color="white" />
      <Text style={styles.text}>{title}</Text>
      <View style={{ transform: [{ rotate: "270deg" }] }}>
        <Feather name="bar-chart-2" size={25} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#393939"
  },
  text: { color: "white", marginVertical: 10, fontSize: 17 }
});

export default StackHeader;
