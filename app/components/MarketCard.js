import React, { useEffect, useState } from "react";
import {
  LayoutAnimation,
  Text,
  Image,
  TouchableOpacity,
  UIManager,
  Platform,
  StyleSheet,
} from "react-native";
import MyCard from "./MyCard";
import loadMetadata from "../api/loadSymbol";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const MarketCard = (props) => {
  const [showSecret, toggleGraph] = useState(false);
  const [metadataLoaded, setImageUrl] = useState(true);
  //let imageUrl = require("../assets/appLogo.png");

  // useEffect(() => {
  //   loadImage();
  // }, []);

  // const loadImage = async () => {
  //   let response = await loadMetadata(props.cryptoSymbol);
  //   //console.log(response);
  //   if (typeof response !== "undefined") {
  //     //imageUrl = response["data"]["data"][props.cryptoSymbol]["logo"];
  //     console.log(response);
  //     //setImageUrl(true);
  //   }
  // };

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
          toggleGraph(!showSecret);
        }}
      >
        {!metadataLoaded && (
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/appLogo.png")}
          />
        )}
        {metadataLoaded && (
          <Image
            style={{ width: 100, height: 100 }}
            //source={{ uri: imageUrl }}
            source={require("../assets/appLogo.png")}
          />
        )}
        <Text style={cardStyle.coinName}>{props.coinName}</Text>
        {showSecret && <Text>{props.secretMessage}</Text>}
      </TouchableOpacity>
    </MyCard>
  );
};

const cardStyle = StyleSheet.create({
  coinName: {
    fontWeight: "400",
  },
});

export default MarketCard;
