import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Globals from "../utility/globals";

function TradeScreen() {
  const route = useRoute();

  //const repo = Globals.coinRepo;
  const { coinName } = route.params;
  console.log(coinName);

  return (
    <View style={styles.container}>
      <AppText style={{ color: "black" }}>Trade Screen</AppText>
    </View>
  );
}

export default TradeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
