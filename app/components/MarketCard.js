import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  LayoutAnimation,
  Text,
  Image,
  TouchableOpacity,
  UIManager,
  Platform,
  Button,
  StyleSheet,
  View,
} from "react-native";
import colors from "./colors";
import MyCard from "./MyCard";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const cryptoIcon = "https://cryptoicons.org/api/color/";
const iconWidth = "/64";

const MarketCard = (props) => {
  const navigation = useNavigation();

  const [showDetail, toggleGraph] = useState(false);
  const imageUrl = cryptoIcon + props.currency.toLowerCase() + iconWidth;

  const fixed = props.secretMessage.toFixed(2).toString();
  let tenPower = props.secretMessage.toString().indexOf(".");
  tenPower = props.secretMessage.toString().length - tenPower;

  return (
    <MyCard style={props.style}>
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.configureNext(
            LayoutAnimation.create(
              100,
              LayoutAnimation.Types.linear,
              LayoutAnimation.Properties.opacity
            )
          );
          toggleGraph(!showDetail);
        }}
      >
        <View style={cardStyle.coinContainer}>
          <Image
            style={cardStyle.cointImage}
            source={{ uri: imageUrl, cache: "only-if-cached" }}
          />
          <Text style={cardStyle.coinName}>{props.coinName}</Text>

          <View style={{ flexGrow: 1 }} />

          <View style={cardStyle.priceContainer}>
            <Text style={cardStyle.price}>{fixed + "x10"}</Text>
            <Text style={cardStyle.tenPower}>{tenPower}</Text>
          </View>
        </View>
        {showDetail && (
          <>
            <View style={cardStyle.showDetailContainer}>
              <Button
                onPress={() => {
                  navigation.navigate("Trade", {
                    coinName: props.coinName,
                  });
                }}
                style={cardStyle.detailButton}
                title="Trade"
              />
              <Button
                onPress={() => {
                  navigation.navigate("Detail", {
                    coinName: props.coinName,
                  });
                }}
                style={cardStyle.detailButton}
                title="Show Details"
              />
            </View>
          </>
        )}
      </TouchableOpacity>
    </MyCard>
  );
};

const cardStyle = StyleSheet.create({
  coinContainer: {
    flexDirection: "row",
  },

  cointImage: {
    width: 35,
    height: 35,
    margin: 10,
  },

  price: {
    fontSize: 16,
  },

  tenPower: {
    fontSize: 10,
    lineHeight: 15,
  },

  priceContainer: {
    margin: 10,
    flexDirection: "row",
    alignSelf: "center",
  },

  coinName: {
    fontWeight: "300",
    alignSelf: "center",
    fontSize: 22,
  },

  detailButton: {
    marginHorizontal: 8,
    fontSize: 18,
    color: colors.secondary,
  },

  showDetailContainer: {
    flexDirection: "row-reverse",
  },
});

export default MarketCard;
