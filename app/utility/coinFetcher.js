import { useState, useEffect } from "react";
import useApi from "../hooks/useApi";
import coinFetchService from "../api/fetchCoins";

function coinFetcher() {
  const { data, loading, error, loadData } = useApi();
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [coins, setCoins] = useState([]);
  const [currentBtn, setCurrentBtn] = useState(true);

  useEffect(() => {
    console.log("Inside useEffect");
    console.log(data);
    setFilteredCoins(data);
    setCoins(data);
  }, [data]);

  const fetchCoins = async (currency) => {
    setFilteredCoins([]);
    setCoins([]);
    await loadData(
      currentBtn
        ? coinFetchService.fetchCoins(currency)
        : coinFetchService.latestHistory(currency)
    );
    //console.log(data);
    setCoins(data);
    setFilteredCoins(data);
  };

  return {
    filteredCoins,
    coins,
    currentBtn,
    loading,
    error,
    setCurrentBtn,
    fetchCoins,
    setFilteredCoins,
  };
}

export default coinFetcher;
