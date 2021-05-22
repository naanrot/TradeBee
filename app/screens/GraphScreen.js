import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import { useRoute } from "@react-navigation/native";
import HistoryData from "../api/history";
import { VictoryBar, VictoryChart } from "victory-native";
import ActivityIndicator from "../components/ActivityIndicator";
import { coinRepo } from "../utility/globals";
import StatusBarScreen from "../components/StatusBarScreen";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";
import SearchableDropDown from "../components/SearchableDropdown";

function GraphScreen(props) {
  const [loading, setLoading] = useState(true);
  const [graph, setGraph] = useState([]);
  const route = useRoute();
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [coinName, setCoinName] = useState(null);

  let d = new Date();
  d.setDate(d.getDate() - 7);

  console.log(route.params.coinName);

  const graph_items = [];

  useEffect(() => {
    loadCoins();

    if (route.params.coinName !== "null") {
      setCoinName(route.params.coinName);
      setSearch(route.params.coinName);
      temp(route.params.coinName);
    } else {
      setLoading(false);
    }
  }, []);

  const loadCoins = () => {
    let tempData = coinRepo.get("top", "INR");
    setCoins(tempData);
    setFilteredCoins(coinRepo.get("top", "INR"));
  };

  const temp = async (cN) => {
    setLoading(true);
    const data = await HistoryData.gettingHistory(
      cN.toUpperCase(),
      "USD",
      d.toISOString()
    );

    if (data.ok) {
      data.data.forEach((item) => {
        graph_items.push({ time: item.time_close, rate: item.rate_close });
        setGraph(graph_items);
      });
    } else {
      console.log(data.problem);
    }
    setLoading(false);
  };

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = coins.filter((item) => {
        let tempCointName = item.name;
        tempCointName = tempCointName
          ? tempCointName.toUpperCase()
          : "".toUpperCase();
        return tempCointName.indexOf(text.toUpperCase()) > -1;
      });
      setFilteredCoins(newData);
      setSearch(text);
    } else {
      setFilteredCoins(coins);
      setSearch(text);
    }
  };

  return (
    <StatusBarScreen style={styles.container}>
      <View style={{ width: "100%" }}>
        <SearchableDropDown
          onTextChange={(text) => console.log(text)}
          containerStyle={{ padding: 5 }}
          onItemSelect={(item) => {
            setCoinName(item.name);
            temp(item.symbol);
            console.log(item);
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: "#222",
          }}
          textInputStyle={{
            //inserted text style
            padding: 12,
            borderWidth: 1,
          }}
          items={coins}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: "#FAF9F8",
            borderColor: "#bbb",
            borderWidth: 1,
          }}
          placeholder={
            coinName === null ? "Coin name..." : coinName.toUpperCase()
          }
          itemsContainerStyle={{ width: "100%", height: "60%" }}
        />
      </View>
      {loading && <ActivityIndicator />}
      {!loading && (
        <View style={styles.chartHolderContainer}>
          {coinName !== null && (
            <VictoryChart>
              <VictoryBar data={graph} x="time" y="rate" />
            </VictoryChart>
          )}
          {coinName === null && (
            <Text style={styles.requestingText}>Please set coin name</Text>
          )}
        </View>
      )}
    </StatusBarScreen>
  );
}

export default GraphScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  chartHolderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  requestingText: {
    fontWeight: "600",
    fontSize: 20,
  },
});
