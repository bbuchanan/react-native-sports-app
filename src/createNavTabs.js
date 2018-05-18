import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-home", 30),
    Icon.getImageSource("md-menu", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "sports-app.ScoreScreen",
          label: "Scores",
          icon: sources[0]
        },
        {
          screen: "sports-app.StatsScreen",
          label: "Stats",
          icon: sources[1]
        }
      ]
    });
  });
};

export default startTabs;
