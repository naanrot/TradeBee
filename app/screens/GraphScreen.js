// import React, { useEffect, useState } from "react";
// import {
//   View,
//   StyleSheet,
//   FlatList,
//   ScrollView,
//   TextInput,
// } from "react-native";
// import axios from "axios";
// import AppTextInput from "../components/AppTextInput";
// import AppText from "../components/AppText";
// import Coin from "../components/Coin";

// function GraphScreen(props) {
//   const [coins, setCoins] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filteredDataSource, setFilteredDataSource] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
//       )
//       .then((res) => {
//         setCoins(res.data);
//         setFilteredDataSource(res.data);
//       })
//       .catch((err) => {
//         alert("its error");
//       });
//   });

//   //   const filteredCoins = coins.filter((coin) =>
//   //     coin.name.toLowerCase().includes(search.toLowerCase())
//   //   );
//   //   const searchFilterFunction = (text) => {
//   //     if (text) {
//   //       const newData = coins.filter((item) => {
//   //         const itemData = item.name ? item.id.toUpperCase() : "".toUpperCase();
//   //         const textData = text.toUpperCase();
//   //         return itemData.indexOf(textData) > -1;
//   //       });
//   //       setFilteredDataSource(newData);
//   //       setSearch(text);
//   //     } else {
//   //       setFilteredDataSource(coins);
//   //       setSearch(text);
//   //     }
//   //   };
//   return (
//     <ScrollView style={styles.container}>
//       <TextInput
//         style={{ backgroundColor: "yellowgreen" }}
//         placeholder="Search"
//         onChangeText={(text) => searchFilterFunction(text)}
//         value={search}
//       />    

//       <FlatList
//         data={coins}
//         keyExtractor={(menuItem) => menuItem.id.toString()}
//         renderItem={({ item }) => (
//           <Coin
//             image={item.image}
//             name={item.name}
//             price={item.current_price}
//             symbol={item.symbol}
//             volume={item.market_cap}
//           />
//         )}
//       />
//     </ScrollView>
//   );
// }

// export default GraphScreen;

// const styles = StyleSheet.create({
//   container: {},
// });
