import React from "react";
import { View, LogBox, Text } from "react-native";

import AppButton from "../AppButton";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

export default function WalletPage() {
  return (
    <View style={{ backgroundColor: "white", marginTop: 20 }}>
      <Text style={{ fontWeight: "bold", marginBottom: 6 }}>Total Balance</Text>
      <Text style={{ fontSize: 40, marginBottom: 20 }}>$1,209.32</Text>
      <View
        style={{
          flexDirection: "row",
          borderRadius: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AppButton title="Withdraw" style={{ width: "40%", marginTop: 10 }} />

        <AppButton
          title="Deposit"
          style={{ width: "40%", marginLeft: 20, marginTop: 10 }}
        />
      </View>
    </View>
  );
}
