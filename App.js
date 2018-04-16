import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import axios from "./src/axios-sports";

export default class App extends React.Component {
  componentDidMount() {
    axios.get("scoreboard.json?fordate=20170411").then(data => {
      debugger;
    });
  }
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
