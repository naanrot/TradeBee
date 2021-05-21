import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import StatusBarScreen from "../components/StatusBarScreen";

function TradeScreen() {
  const route = useRoute();

  const { coinName } = route.params;
  console.log(coinName);

  return (
    <StatusBarScreen>
      <AppText>Hello Ajmal</AppText>
    </StatusBarScreen>
  );
}

export default TradeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
