import React from "react";
import { View, StyleSheet } from "react-native";
import ProfileComponent from "../components/ProfileComponent";
import StatusBarScreen from "../components/StatusBarScreen";
import UserProfile from "../components/UserProfile";

function ProfileScreen(props) {
  return (
    <StatusBarScreen>
      <UserProfile />
      <ProfileComponent />
    </StatusBarScreen>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
});
