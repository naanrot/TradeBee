import React from "react";

import StatusBarScreen from "./app/components/StatusBarScreen";
import MainNavigation from "./app/Navigation/MainNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <StatusBarScreen>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </StatusBarScreen>
  );
}
