import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  TextInput,
} from "react-native";

import { useRoute } from "@react-navigation/native";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import Coin from "../components/Coin";
import Apidata from "../api/client";
import HistoryData from "../api/history";
import { VictoryBar, VictoryChart } from "victory-native";
import ActivityIndicator from "../components/ActivityIndicator";

function GraphScreen(props) {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  const [graph, setGraph] = useState([]);
  const route = useRoute();

  const { coinName } = route.params;
  console.log(coinName);
  let d = new Date();
  d.setDate(d.getDate() - 7);

  const graph_items = [];

  useEffect(() => {
    temp();
  }, []);

  const temp = async () => {
    const data = await HistoryData.gettingHistory(
      coinName.toUpperCase(),
      "USD",
      d.toISOString()
    );
    // console.log(data.data);
    if (data.ok) {
      data.data.forEach((item) => {
        graph_items.push({ time: item.time_close, rate: item.rate_close });
        setGraph(graph_items);
      });
      console.log(graph_items);
    } else {
      console.log(data.problem);
    }
    setLoading(false);
  };

  return (
    <View>
      {loading && <ActivityIndicator />}
      {!loading && (
        <VictoryChart>
          <VictoryBar data={graph} x="time" y="rate" />
        </VictoryChart>
      )}
    </View>
  );
}

export default GraphScreen;

const styles = StyleSheet.create({
  container: {},
});
