import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import axios from "./src/axios-sports";
import ScorecardItem from "./src/components/ScorecardItem";

export default class App extends React.Component {
  state = {
    scores: null,
    hadError: false,
    errorMessage: ""
  };

  componentDidMount() {
    axios
      .get("scoreboard.json?fordate=20170411")
      .then(data => {
        let scores = data.data.scoreboard.gameScore.map(score => {
          return {
            awayScore: score.awayScore,
            homeScore: score.homeScore,
            homeTeam: `${score.game.homeTeam.City} ${score.game.homeTeam.Name}`,
            awayTeam: `${score.game.awayTeam.City} ${score.game.awayTeam.Name}`,
            location: score.game.location
          };
        });
        this.setState({
          scores,
          hadError: false,
          errorMessage: ""
        });
      })
      .catch(err => {
        this.setState({
          scores: null,
          hadError: true,
          errorMessage: err.message
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScorecardItem />
        <ScorecardItem />
        <ScorecardItem />
        <ScorecardItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginTop: 25
  }
});
