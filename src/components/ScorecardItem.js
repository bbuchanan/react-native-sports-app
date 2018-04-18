import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardItemContainer: {
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
    margin: 12,
    alignItems: "center"
  },
  scoreContainer: {
    margin: 3
  },
  teamName: {
    fontSize: 14,
    textAlign: "center"
  },
  teamScore: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold"
  }
});

class ScorecardItem extends Component {
  render() {
    return (
      <View style={styles.cardItemContainer}>
        <View style={styles.scoreContainer}>
          <View>
            <Text style={styles.teamName}>{this.props.awayTeam}</Text>
          </View>
          <Text style={styles.teamScore}>{this.props.awayScore}</Text>
          <View>
            <Text style={styles.teamName}>{this.props.homeTeam}</Text>
          </View>
          <Text style={styles.teamScore}>{this.props.homeScore}</Text>
        </View>
      </View>
    );
  }
}

export default ScorecardItem;
