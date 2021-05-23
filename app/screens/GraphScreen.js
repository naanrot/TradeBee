import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  TextInput,
  Button,
} from "react-native";

import { useRoute } from "@react-navigation/native";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import Coin from "../components/Coin";
import Apidata from "../api/client";
import HistoryData from "../api/history";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from "victory-native";
import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/AppButton";

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
      //   console.log(graph_items);
    } else {
      console.log(data.problem);
    }
    setLoading(false);
  };

  return (
    <View>
      <View style={{ marginTop: 80 }}>
        {loading && <ActivityIndicator />}
        {!loading && (
          <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
            <VictoryAxis
              tickValues={[1, 2, 3, 4, 5, 6]}
              tickFormat={["1", "2", "3", "4", "5", "6", "7"]}
              label="Graph Analysis of Past 7 Days"
              style={{
                axisLabel: { padding: 40 },
              }}
            />
            <VictoryAxis dependentAxis tickFormat={(x) => `${x / 1000}k`} />
            <VictoryBar
              data={graph}
              x="time"
              y="rate"
              style={{ data: { fill: "#FFE663" } }}
              barRatio={0.7}
            />
          </VictoryChart>
        )}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 60,
        }}
      >
        <AppButton
          title="1 Day"
          style={{ width: "30%", fontSize: 10, margin: 4, padding: 4 }}
        />
        <AppButton
          title="1 Week"
          style={{ width: "30%", fontSize: 10, margin: 4, padding: 2 }}
        />
        <AppButton
          title="1 Month"
          style={{
            width: "30%",
            fontSize: 10,
            margin: 4,
            padding: 2,
          }}
        />
      </View>
    </View>
  );
}

export default GraphScreen;

const styles = StyleSheet.create({
  container: {},
});
