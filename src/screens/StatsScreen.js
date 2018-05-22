import React from "react";
import { StyleSheet, Text, Picker, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Left,
  Body
} from "native-base";
import axios from "../axios-sports";

const styles = StyleSheet.create({
  playerNameText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold"
  },
  statText: {
    fontWeight: "bold"
  }
});

export default class StatsScreen extends React.Component {
  teams = [
    {
      name: "Atlanta Braves",
      code: "atl",
      logo:
        "https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/05/atlanta_braves_logo_2018-768x312.png"
    },
    {
      name: "Detroit Tigers",
      code: "det",
      logo:
        "https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2014/05/tigers_logo.jpg"
    },
    {
      name: "Boston Red Sox",
      code: "bos",
      logo:
        "https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/05/boston_red_sox_logo.png"
    },
    {
      name: "Tampa Bay Rays",
      code: "tb",
      logo:
        "https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2014/05/rays_logo.jpg"
    },
    {
      name: "Seattle Mariners",
      code: "sea",
      logo:
        "https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2014/05/mariners_logo.jpg"
    }
  ];

  state = {
    currentTeam: this.teams[0],
    stats: null,
    hadError: false,
    errorMessage: ""
  };

  componentDidMount() {
    this.loadStats();
  }

  loadStats = () => {
    axios
      .get(`cumulative_player_stats.json?team=${this.state.currentTeam.code}`)
      .then(data => {
        let stats = data.data.cumulativeplayerstats.playerstatsentry.map(p => {
          return {
            firstName: p.player.FirstName,
            lastName: p.player.LastName,
            battingAverage: p.stats.BattingAvg["#text"],
            homeruns: p.stats.Homeruns["#text"],
            image:
              "https://www.gannett-cdn.com/-mm-/60c67b4da0efea761b6f18d2a7eb4c3e05ae4c7d/c=241-0-4017-2839&r=x404&c=534x401/local/-/media/2018/04/26/USATODAY/USATODAY/636603455387676668-AP-APTOPIX-Reds-Braves-Baseball-99453123.JPG"
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
        currentTeam: this.teams.find(t => t.code === value)
      },
      () => this.loadStats()
    );
  };

  render() {
    const pickerItems = this.teams.map(team => {
      return (
        <Picker.Item key={team.code} value={team.code} label={team.name} />
      );
    });
    return (
      <Container
        style={{
          flex: 1,
          alignContent: "flex-start",
          justifyContent: "flex-start"
        }}
      >
        <Picker
          selectedValue={this.state.currentTeam.code}
          onValueChange={(value, index) => this.teamSelectionChanged(value)}
        >
          {pickerItems}
        </Picker>
        <View>
          {this.state.stats !== null ? (
            <DeckSwiper
              dataSource={this.state.stats}
              renderItem={item => (
                <Card style={{ elevation: 3 }}>
                  <CardItem>
                    <Left>
                      <Image
                        style={{
                          resizeMode: "contain",
                          width: 80,
                          height: 50
                        }}
                        source={{ uri: this.state.currentTeam.logo }}
                      />
                    </Left>
                    <Body>
                      <Text style={styles.playerNameText}>
                        {item.firstName} {item.lastName}
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem cardBody>
                    <Image
                      style={{
                        width: 100,
                        height: 100
                      }}
                      source={{ uri: item.image }}
                    />
                    <View
                      style={{
                        margin: 7,
                        alignSelf: "flex-start",
                        flexDirection: "column"
                      }}
                    >
                      <Text style={styles.statText}>
                        Batting Average: {item.battingAverage}
                      </Text>
                      <Text style={styles.statText}>
                        Homeruns: {item.homeruns}
                      </Text>
                    </View>
                  </CardItem>
                  <CardItem>
                    <Text>Swipe for Next Player </Text>
                    <Icon name="md-arrow-round-forward" />
                  </CardItem>
                </Card>
              )}
            />
          ) : null}
        </View>
      </Container>
    );
  }
}
