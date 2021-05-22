import React, { useEffect } from "react";
import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import history from "../api/history";

function GraphScreen(props) {
  const graph_items = [];

  const loadData = async () => {
    const response = await history.fetchHistory("BTC", "USD", "2021-05-15");
    if (response.ok) {
      response.data.forEach((item) => {
        graph_items.push({
          time: item.time_close,
          rate: item.rate_close,
        });
      });
    } else {
      console.log(response.problem);
    }
    console.log(graph_items);
  };

  useEffect(() => {
    loadData();
  });

  return <Text>Hello Ajmal</Text>;
}

export default GraphScreen;
