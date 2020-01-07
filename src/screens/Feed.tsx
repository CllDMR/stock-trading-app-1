import React, { FC, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  FlatList
} from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { StackHeader, Post, DropDown } from "@components";
import { PostDataType, SelectTopicAction, TopicType } from "@typings/Post";

type Props = {
  navigation: NavigationStackProp;
  posts: PostDataType[];
  topics: TopicType[];
  selectedTopic: TopicType;
  selectTopic: SelectTopicAction;
};

const FeedScreen: FC<Props> = ({
  posts,
  selectTopic,
  topics,
  selectedTopic
}) => {
  const [open, setOpen] = useState<0 | 1>(0);
  const options = topics.map(topic => topic.label);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#393939" />
      <StackHeader title="My Feed" />

      <View style={styles.container}>
        <DropDown
          open={open}
          title={`${selectedTopic.label} Posts`}
          value={selectedTopic.value}
          options={options}
          setOpen={setOpen}
          onPressElement={value => {
            const topic = topics.find(topic => topic.label === value);
            topic
              ? selectTopic({
                  topic
                })
              : null;
          }}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          bounces={false}
          data={posts}
          renderItem={({ item }) => <Post {...item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

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

export default FeedScreen;
