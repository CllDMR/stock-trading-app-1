import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView
} from "react-native";

import { NavigationStackProp } from "react-navigation-stack";

import { mocks } from "../constants";
import { MovieDataType } from "../constants/mocks";

const movieDatas = mocks.movieDatas;
const APIKEY = "";

const { height, width } = Dimensions.get("window");

type Props = {
  navigation: NavigationStackProp;
};

type State = MovieDataType & {
  actors: string[];
};

export class MovieScreen extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      imdbID: "",
      Title: "",
      Poster: "",
      Plot: "",
      Genre: "",
      Year: "",
      Runtime: "",
      actors: []
    };
  }

  componentDidMount() {
    const imdbID = this.props.navigation.getParam("imdbID");

    const movieData = movieDatas.find(movieData => movieData.imdbID === imdbID);

    this.setState({
      imdbID,
      Title: movieData.Title,
      Poster: movieData.Poster,
      Plot: movieData.Plot,
      Genre: movieData.Genre,
      Year: movieData.Year,
      Runtime: movieData.Runtime,
      actors: movieData.Actors.split(", ")
    });

    // fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`)
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //     this.setState({
    //       imdbID,
    //       Title: json.Title,
    //       Poster: json.Poster,
    //       Plot: json.Plot,
    //       Genre: json.Genre,
    //       Year: json.Year,
    //       Runtime: json.Runtime,
    //       actors: json.Actors.split(", ")
    //     });
    //   });
  }

  render() {
    const { Title, Poster, Plot, Genre, Year, Runtime, actors } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView bounces={false} style={styles.container}>
          <View
            style={{
              height: (height * 8) / 10,
              width
            }}
          >
            {Poster.length > 0 && (
              <Image
                blurRadius={5}
                source={{
                  uri: Poster
                }}
                style={{
                  height: "100%",
                  width: "100%",
                  opacity: 0.3
                }}
              />
            )}
            <View
              style={{
                zIndex: 1,
                position: "absolute",
                top: height / 10,
                bottom: (height * 2) / 10,
                left: (width * 2) / 10,
                right: (width * 2) / 10
              }}
            >
              {Poster.length > 0 && (
                <Image
                  source={{ uri: Poster }}
                  style={{ height: "100%", width: "100%" }}
                />
              )}
            </View>

            <View
              style={{
                alignItems: "center",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: (height * 2) / 10,
                paddingHorizontal: 10
              }}
            >
              <Text style={{ marginTop: 10, color: "white", fontSize: 25 }}>
                {Title + " (" + Year + ")"}
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  color: "rgba(155,155,155,1.0)",
                  fontSize: 15
                }}
              >
                {Genre + " - " + Runtime + " - Rating"}
              </Text>
            </View>
          </View>
          <View style={{ padding: 20 }}>
            <View style={{ marginTop: 20, marginBottom: 20 }}>
              <Text
                style={{
                  color: "rgba(200,200,200,1.0)",
                  fontSize: 20
                }}
              >
                Movie Info
              </Text>
            </View>
            <View style={{}}>
              <Text style={{ color: "rgba(155,155,155,1.0)", fontSize: 15 }}>
                {Plot}
              </Text>
            </View>
            <View style={{ marginTop: 20, marginBottom: 20 }}>
              <Text
                style={{
                  color: "rgba(200,200,200,1.0)",
                  fontSize: 20
                }}
              >
                Cast & Crew
              </Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {actors &&
                actors.map(actor => (
                  <Text
                    key={`${actor}`}
                    style={{ color: "rgba(155,155,155,1.0)", fontSize: 15 }}
                  >
                    {" "}
                    {actor}
                  </Text>
                ))}
            </View>
          </View>
        </ScrollView>
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

export default MovieScreen;
