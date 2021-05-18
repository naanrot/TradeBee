import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

function TradeScreen(props) {
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
