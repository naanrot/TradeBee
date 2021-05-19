import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  UIManager,
  Platform,
  FlatList,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import CoinRepo from "../utility/coinRepo";
import coinFetchService from "../api/fetchCoins";
import ActiveButton from "../components/ActiveButton";
import MarketCard from "../components/MarketCard";
import StatusBarScreen from "../components/StatusBarScreen";
import { AntDesign } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import ActivityIndicator from "../components/ActivityIndicator";
import loadMetadata from "../api/loadSymbol";
import colors from "../components/colors";
import Globals from "../utility/globals";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

//const repo = new CoinRepo();

function MarketScreen() {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState(coins);
  const [exchangerate, setExchangeRate] = useState("INR");
  const [currentBtn, toggleActiveBtn] = useState(false);
  const [showSearchBar, toggleSearchBar] = useState(false);
  const [loading, setLoading] = useState(true);

  const repo = Globals.coinRepo;

  useEffect(() => {
    loadData(currentBtn);
    return () => {
      coinFetchService.cancelFetchCoins();
    };
  }, []);

  const loadData = async (tempCurrentBtn, currency) => {
    currency = typeof currency === "undefined" ? exchangerate : currency;
    const type = tempCurrentBtn ? "all" : "top";

    setLoading(true);
    let data = repo.get(type, currency);
    const endPoint = tempCurrentBtn ? "rates" : "data";

    if (typeof data === "undefined") {
      let response = tempCurrentBtn
        ? await loadCoins(currency)
        : await loadTop(currency);
      repo.store(type, currency, response.data);

      setLoading(false);
      setCoins(response["data"][endPoint]);
      setFilteredCoins(response["data"][endPoint]);
    } else {
      setLoading(false);

      setCoins(data[endPoint]);
      setFilteredCoins(data[endPoint]);
    }
  };

  const loadCoins = (currency) => coinFetchService.fetchCoins(currency);

  const loadTop = (currency) => coinFetchService.latestHistory(currency);

  const resetCoins = () => {
    setFilteredCoins([]);
    setCoins([]);
  };

  const rateChanged = (currency) => {
    setExchangeRate(currency);
    resetCoins();
    loadData(currentBtn, currency);
  };

  const toggleRequest = (value) => {
    if (currentBtn != value) {
      toggleActiveBtn(value);
      coinFetchService.cancelFetchCoins();
      resetCoins();
      loadData(value);
    }
  };

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = coins.filter((item) => {
        let coinName = currentBtn ? item.asset_id_quote : item.name;
        coinName = coinName ? coinName.toUpperCase() : "".toUpperCase();
        return coinName.indexOf(text.toUpperCase()) > -1;
      });
      setFilteredCoins(newData);
      setSearch(text);
    } else {
      setFilteredCoins(coins);
      setSearch(text);
    }
  };

  return (
    <StatusBarScreen>
      <View style={styles.container}>
        <View>
          <View style={styles.horFilterBtnContainer}>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => {
                  toggleRequest(false);
                }}
              >
                <ActiveButton isActive={!currentBtn} title="Top 100" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  toggleRequest(true);
                }}
              >
                <ActiveButton isActive={currentBtn} title="All" />
              </TouchableOpacity>

              <View style={{ flexGrow: 1 }} />

              <Picker
                mode="dropdown"
                selectedValue={exchangerate}
                style={styles.pickerStyle}
                onValueChange={(itemValue, itemIndex) => {
                  rateChanged(itemValue);
                  //console.log(itemValue);
                }}
              >
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="INR" value="INR" />
              </Picker>

              <AntDesign
                name="search1"
                size={20}
                style={styles.serachIcon}
                onPress={() => {
                  LayoutAnimation.configureNext(
                    LayoutAnimation.create(
                      100,
                      LayoutAnimation.Types.linear,
                      LayoutAnimation.Properties.opacity
                    )
                  );
                  toggleSearchBar(!showSearchBar);
                }}
              />
            </View>
          </View>
          {showSearchBar && (
            <SearchBar
              lightTheme={true}
              onChangeText={(text) => searchFilterFunction(text)}
              onClear={(text) => searchFilterFunction("")}
              placeholder="Coint name..."
              value={search}
            />
          )}
        </View>
        {!loading && (
          <>
            {currentBtn && (
              <FlatList
                data={filteredCoins}
                keyExtractor={(coin) => coin.asset_id_quote}
                renderItem={({ item }) => (
                  <MarketCard
                    coinName={item.asset_id_quote}
                    secretMessage={item.rate}
                    currency={item.asset_id_quote}
                    style={{
                      alignSelf: "center",
                    }}
                  />
                )}
              />
            )}
            {!currentBtn && (
              <FlatList
                data={filteredCoins}
                keyExtractor={(coin) => coin.id.toString()}
                renderItem={({ item }) => (
                  <MarketCard
                    coinName={item.name}
                    secretMessage={item["quote"][exchangerate]["price"]}
                    currency={item.symbol}
                    style={{
                      alignSelf: "center",
                    }}
                  />
                )}
              />
            )}
          </>
        )}
        {loading && <ActivityIndicator />}
      </View>
    </StatusBarScreen>
  );
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: "blue",
    borderWidth: 0.5,
    borderColor: "#d6d7da",
  },

  horFilterBtnContainer: {
    flexDirection: "row",
    backgroundColor: colors.primary,
  },

  pickerStyle: {
    alignSelf: "center",
    width: "23%",
  },

  serachIcon: {
    alignSelf: "center",
    marginEnd: 15,
  },

  container: {
    flex: 1,
  },
});

export default MarketScreen;
