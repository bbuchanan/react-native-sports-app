import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.ourImage}
          source={{
            uri:
              "https://www.clker.com/cliparts/I/a/V/A/7/A/blue-star-outline-md.png"
          }}
        />
        <Image
          style={styles.ourImage}
          source={{
            uri:
              "https://www.clker.com/cliparts/I/a/V/A/7/A/blue-star-outline-md.png"
          }}
        />
        <Image
          style={styles.ourImage}
          source={{
            uri:
              "https://www.clker.com/cliparts/I/a/V/A/7/A/blue-star-outline-md.png"
          }}
        />
        <Image
          style={styles.ourImage}
          source={{
            uri:
              "https://www.clker.com/cliparts/I/a/V/A/7/A/blue-star-outline-md.png"
          }}
        />
        <Image
          style={styles.ourImage}
          source={{
            uri:
              "https://www.clker.com/cliparts/I/a/V/A/7/A/blue-star-outline-md.png"
          }}
        />
        <Image
          style={styles.ourImage}
          source={{
            uri:
              "https://www.clker.com/cliparts/I/a/V/A/7/A/blue-star-outline-md.png"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ourImage: {
    height: 50,
    width: 50,
    resizeMode: "contain"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
