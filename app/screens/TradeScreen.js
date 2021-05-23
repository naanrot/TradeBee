import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  TextInput,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ActiveButton from "../components/ActiveButton";
import colors from "../components/colors";
import AppText from "../components/AppText";
import PercentageDiffText from "../components/PercentageDiffText";

function TradeScreen() {
  const route = useRoute();
  const [isBuying, setBuying] = useState(true);
  const [loadingData, setLoading] = useState(false);
  const [convertedPrice, setConvertedPrice] = useState("0");

  const { coinName, exchangerate, imageUrl } = route.params;
  console.log(coinName);

  return (
    <View>
      <View style={styles.primaryContainer}>
        <View style={styles.inputTextContainer}>
          <View
            style={{ flex: 1, flexDirection: "row", alignItems: "baseline" }}
          >
            <Text style={{ fontSize: 13, margin: 10 }}>INR</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="0"
              style={styles.initialTextInput}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Text style={{ fontSize: 13, margin: 10 }}>BTC</Text>
            <Text style={styles.convertedTextContainer}>{convertedPrice}</Text>
          </View>
        </View>
        <View style={styles.buySellContainer}>
          <TouchableOpacity
            onPress={() => {
              setBuying(true);
            }}
          >
            <ActiveButton isActive={!isBuying} title="BUY" />
          </TouchableOpacity>
          <View
            style={[
              styles.arrowContainer,
              { transform: [{ rotate: isBuying ? "0deg" : "180deg" }] },
            ]}
          >
            <AntDesign style={styles.activeArrow} size={20} name="arrowup" />
            <AntDesign style={{ color: "black" }} size={20} name="arrowdown" />
          </View>
          <TouchableOpacity
            onPress={() => {
              setBuying(false);
            }}
          >
            <ActiveButton isActive={isBuying} title="SELL" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.secondaryContainer}>
        <Image style={styles.bitCoinImage} source={{ uri: imageUrl }} />
        <AppText style={styles.coinNameStyle}>{coinName}</AppText>
        {loadingData && <ActivityIndicator />}
        {!loadingData && (
          <View style={{ width: "100%" }}>
            <PercentageDiffText
              containerStyle={{
                width: "100%",
              }}
              titleStyle={styles.marketTextStyle}
              valueStyle={styles.marketTextStyle}
              title="Past hour"
              value={-8}
            />
          </View>
        )}
      </View>
    </View>
  );
}

export default TradeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  primaryContainer: {
    flexDirection: "row",
    backgroundColor: colors.disabled,
    padding: 15,
    width: "100%",
  },

  inputTextContainer: {
    flex: 0.8,
  },

  buySellContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },

  arrowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  coinNameStyle: {
    color: "black",
    fontSize: 30,
    marginVertical: 10,
  },

  secondaryContainer: {
    width: "100%",
    height: "100%",
    padding: 10,
    alignItems: "flex-start",
  },

  marketTextStyle: {
    fontSize: 20,
  },

  activeArrow: {
    color: "blue",
  },

  convertedTextContainer: {
    fontSize: 28,
  },

  bitCoinImage: {
    width: 50,
    height: 50,
  },

  initialTextInput: {
    width: "100%",
    flex: 1,
    fontSize: 35,
  },
});
