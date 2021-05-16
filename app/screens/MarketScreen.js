import React, { useState, useEffect } from 'react';
import { 
    View, 
    StyleSheet,
    UIManager,
    Platform,
    FlatList
 } from 'react-native';
import fetchCoins from '../api/fetchCoins';
import MarketCard from '../components/MarketCard';
import StatusBarScreen from '../components/StatusBarScreen';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const marketCardColors = [
  "#F5EB16",
  "#767DFF",
  "#F7931A",
  "#FF0000",
  "#F1CB60",
  "#2CD3E1"
]

function MarketScreen() {
  const [coins, setCoins] = useState([]);
  const [exchangerate, setExchangeRate] = useState("USD");
  var mCC = -1

  useEffect( () => {
    loadCoins();
  }, [])

  const loadCoins = async () => {
    let response = await fetchCoins.fetchCoins(exchangerate);
    console.log(marketCardColors[0])
    setCoins(response.data.rates);
  }

  return (
    <StatusBarScreen>
      <View style={style.container}>
        <FlatList 
          data={coins}
          keyExtractor={coin => coin.asset_id_quote}
          renderItem={({ item }) =>
            <MarketCard 
              coinName={item.asset_id_quote}
              secretMessage={item.rate}
              style={{
                backgroundColor: item.color
              }}
            />
          }
        />
      </View>
    </StatusBarScreen>
  )
}

const style = StyleSheet.create({
    tile: {
      backgroundColor:'blue',
      borderWidth: 0.5,
      borderColor: '#d6d7da',
    },
    container: {
      flex: 1
    },
});

export default MarketScreen;