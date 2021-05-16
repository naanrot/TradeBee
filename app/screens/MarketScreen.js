import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

function MarketScreen(props) {
  return (
    <View style={styles.container}>
      <AppText style={{ color: "black" }}>Market Screen</AppText>
    </View>
  );
}

export default MarketScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
