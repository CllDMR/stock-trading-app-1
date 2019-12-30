import React, { Component, FunctionComponent } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
  TouchableWithoutFeedback
} from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { NavigationStackProp } from "react-navigation-stack";
import { mocks } from "../constants";
import { MovieDataType } from "../constants/mocks";

const APIKEY = "";

const { height, width } = Dimensions.get("window");

type Props = {
  navigation: NavigationStackProp;
};

const DATA = [
  {
    id: "section1",
    sectionTitle: "Section 1",
    data: [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item"
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item"
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item"
      }
    ]
  },
  {
    id: "section2",
    sectionTitle: "Section 2",
    data: [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item"
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item"
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item"
      }
    ]
  },

  {
    id: "section3",
    sectionTitle: "Section 3",
    data: [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item"
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item"
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item"
      }
    ]
  }
];

type State = {
  data: {
    id: string;
    sectionTitle: string;
    data: MovieDataType[];
  }[];
};

export class FeedScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  async componentDidMount() {
    // fetch("http://www.omdbapi.com/?apikey=<<api_key>>&s=home&page=1")
    //   .then(response => response.json())
    //   .then(sectionData => {
    //     for (let index = 0; index < 3; index++) {
    //       this.setState({
    //         data: [
    //           ...this.state.data,
    //           {
    //             id: `section${index}`,
    //             sectionTitle: `Section ${index}`,
    //             data: sectionData.Search.map(sectionData => ({
    //               id: sectionData.imdbID,
    //               title: sectionData.Title,
    //               posterUrl: sectionData.Poster
    //             }))
    //           }
    //         ]
    //       });
    //     }
    //   })
    //   .catch(err => console.error(err));

    // const response = await fetch(
    //   `http://www.omdbapi.com/?apikey=${APIKEY}&s=home&page=1`
    // );
    // const json = await response.json();
    // // console.log("json.Search", json.Search);

    // Promise.all(
    //   json.Search.map(elem =>
    //     fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${elem.imdbID}`)
    //   )
    // )
    //   .then(responses =>
    //     Promise.all(responses.map(response => response.json()))
    //   )
    //   .then(result => console.log(result[9]));

    // .then(response => response.json())
    //   .then(json => {
    //     let imdbIDs = [];
    //     json.Search.forEach(elem => imdbIDs.push(elem.imdbID));
    //     return imdbIDs;
    //   })
    //   .then(imdbIDs =>
    //     imdbIDs.map(imdbID =>
    //       fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`)
    //     )
    //   )
    //   .then(promises =>
    //     Promise.all(promises)
    //       .then(responses => responses.map(response => response.json()))
    //       .then(jsons => console.log(jsons))
    //   );

    let data = [
      { id: "section1", sectionTitle: "Section 1", data: mocks.movieDatas },
      { id: "section2", sectionTitle: "Section 2", data: mocks.movieDatas },
      { id: "section3", sectionTitle: "Section 3", data: mocks.movieDatas }
    ];
    this.setState({ data });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.container, { padding: 35, paddingBottom: 0 }]}>
          <Header />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.data}
            renderItem={({ item }) => (
              <Section
                sectionTitle={item.sectionTitle}
                data={item.data}
                navigation={this.props.navigation}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const Header: FunctionComponent = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>My Feed</Text>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-end",
          marginRight: 20
        }}
      >
        <Feather name="search" size={20} color="white" />
      </View>
      <MaterialCommunityIcons name="dots-vertical" size={30} color="white" />
    </View>
  );
};

const Section: FunctionComponent<{
  sectionTitle: string;
  data: MovieDataType[];
  navigation: NavigationStackProp;
}> = ({ sectionTitle, data, navigation }) => {
  return (
    <>
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionText}>{sectionTitle}</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <MovieCard
            imdbID={item.imdbID}
            Title={item.Title}
            Poster={item.Poster}
            navigation={navigation}
          />
        )}
        // keyExtractor={(item, index) => `${item.imdbID}-${index}`}
        keyExtractor={item => item.imdbID}
      />
    </>
  );
};

const MovieCard: FunctionComponent<{
  navigation: NavigationStackProp;
} & MovieDataType> = ({ imdbID, Title, Poster, navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Movie", { imdbID })}
    >
      <View style={styles.cardContainer}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: Poster }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 35
  },
  headerText: {
    color: "white",
    fontSize: 25
  },
  sectionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20
  },
  sectionText: {
    color: "gray",
    fontSize: 20
  },
  cardContainer: {
    height: height / 4,
    width: (width * 27) / 100,
    borderRadius: 5,
    marginHorizontal: 10
  }
});

export default FeedScreen;
