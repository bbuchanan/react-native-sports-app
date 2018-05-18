import React from "react";
import { Text, View, Picker } from "react-native";
import axios from "../axios-sports";

export default class StatsScreen extends React.Component {
  state = {
    currentTeam: "det",
    stats: null,
    hadError: false,
    errorMessage: ""
  };

  componentDidMount() {
    this.loadStats();
  }

  loadStats = () => {
    axios
      .get(`cumulative_player_stats.json?team=${this.state.currentTeam}`)
      .then(data => {
        let stats = data.data.cumulativeplayerstats.playerstatsentry.map(p => {
          return {
            firstName: p.player.FirstName,
            lastName: p.player.LastName,
            battingAverage: p.stats.BattingAvg["#text"],
            homeruns: p.stats.Homeruns["#text"]
          };
        });

        this.setState({
          stats
        });
      })
      .catch(err => {
        this.setState({
          scores: null,
          hadError: true,
          errorMessage: err.message
        });
      });
  };

  teamSelectionChanged = value => {
    this.setState(
      {
        currentTeam: value
      },
      () => this.loadStats()
    );
  };

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.currentTeam}
          style={{ height: 25, width: 100 }}
          onValueChange={(value, index) => this.teamSelectionChanged(value)}
        >
          <Picker.Item label="Tigers" value="det" />
          <Picker.Item label="Braves" value="atl" />
          <Picker.Item label="Red Sox" value="bos" />
          <Picker.Item label="Rays" value="tam" />
          <Picker.Item label="Mariners" value="sea" />
        </Picker>
      </View>
    );
  }
}
