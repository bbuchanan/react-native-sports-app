import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import DatePicker from "react-native-datepicker";
import moment from "moment";
import axios from "./src/axios-sports";
import ScorecardItem from "./src/components/ScorecardItem";

export default class App extends React.Component {
  state = {
    scores: null,
    hadError: false,
    errorMessage: "",
    date: "20170411"
  };

  componentDidMount() {
    this.loadScores();
  }

  loadScores = () => {
    axios
      .get(`scoreboard.json?fordate=${this.state.date}`)
      .then(data => {
        let scores = data.data.scoreboard.gameScore.map(score => {
          return {
            awayScore: score.awayScore,
            homeScore: score.homeScore,
            homeTeam: `${score.game.homeTeam.City} ${score.game.homeTeam.Name}`,
            awayTeam: `${score.game.awayTeam.City} ${score.game.awayTeam.Name}`,
            gameId: score.game.ID,
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
  };

  dateChangedHandler = date => {
    this.setState({ date: moment(date).format("YYYYMMDD") });
    this.loadScores();
  };

  render() {
    return (
      <View style={styles.container}>
        <DatePicker
          style={{ width: 200 }}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2017-11-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={date => this.dateChangedHandler(date)}
        />

        {this.state.scores !== null ? (
          <FlatList
            contentContainerStyle={styles.container}
            data={this.state.scores}
            numColumns={2}
            keyExtractor={item => item.gameId}
            renderItem={({ item }) => (
              <ScorecardItem
                awayTeam={item.awayTeam}
                awayScore={item.awayScore}
                homeTeam={item.homeTeam}
                homeScore={item.homeScore}
              />
            )}
          />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 25
  }
});
