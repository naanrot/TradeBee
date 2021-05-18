import React from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
} from "react-native";
import ListItem from "./ListItem";
import StatusBarScreen from "./StatusBarScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import ProfileIconComponent from "./MaterialCommunity";
import MaterialCommunity from "./MaterialCommunity";
import MaterialIcon from "./MaterialIcon";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

function UserProfile(props) {
  return (
    <View style={styles.InnerContainer}>
      <View style={styles.icon}>
        <MaterialIcon name="qr-code-scanner" size={30} />
        <View style={{ flexGrow: 1 }} />
        <MaterialCommunity name="theme-light-dark" size={30} />
      </View>

      <View style={styles.Usercontainer}>
        <ListItem
          style={{
            padding: 10,
          }}
          image={require("../assets/minion.jpg")}
          title="Dipak Raut"
          subtitle="dipakraut114@gmail.com"
          refer="Refer"
        />
      </View>
    </View>
  );
}

export default UserProfile;

const styles = StyleSheet.create({
  InnerContainer: {
    marginBottom: 10,
  },
  icon: {
    flexDirection: "row",
    width: "100%",
    padding: 8,
  },
  Usercontainer: {
    width: "95%",
    backgroundColor: "#FFE663",
    borderRadius: 20,
    alignSelf: "center",
  },
  firstIcon: {
    position: "absolute",
  },
  sunMoon: {
    marginLeft: 270,
  },
});
