import apiClient from "./client";

const coinIOEndPoint = "exchangerate/";

const fetchCoins = (baseId) => apiClient.coinIO.get(coinIOEndPoint + baseId);

const cancelFetchCoins = () => apiClient.cancelRequest;

const coinGekoEndPoint = "coins/markets";

const latestHistory = (currency) =>
  apiClient.coinGeko.get(coinGekoEndPoint, {
    vs_currency: currency,
  });

export default {
  fetchCoins,
  cancelFetchCoins,
  latestHistory,
};
