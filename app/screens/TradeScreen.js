import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Globals from "../utility/globals";

function TradeScreen(props) {
  const repo = Globals.coinRepo;

  console.log(repo.get("top", "INR"));

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
