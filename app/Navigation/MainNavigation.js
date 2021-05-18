import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileNavigation from "./ProfileNavigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../components/colors";
import { NavigationContainer } from "@react-navigation/native";
import UserProfile from "../components/UserProfile";
import MarketScreen from "../screens/MarketScreen";
import TradeScreen from "../screens/TradeScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "#FFE663",
        activeTintColor: "black",
        inactiveBackgroundColor: "white",
        inactiveTintColor: "black",
      }}
    >
      {/* Below Tab are not Used */}
      <Tab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={TradeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} /> // suggesting by react native
          ),
        }}
      />
    </Tab.Navigator>
  );
}
