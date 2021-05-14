import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar"
import colors from "./colors";

export default function StatusBarScreen({ children, style }) {
  return (
    <SafeAreaView style={styles.screen}>
      {children}
      <StatusBar backgroundColor="#6D4C41" style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

// use for setting status bar height
// cut off screen issue not solved
