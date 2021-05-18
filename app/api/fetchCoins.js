import apiClient from "./client";

const endpoint = "exchangerate/";

const fetchCoins = (baseId) => apiClient.coinIO.get(endpoint + baseId);

const cancelFetchCoins = () => apiClient.cancelRequest;

const latestHistory = (currency) =>
  apiClient.coinMarketCap.get("cryptocurrency/listings/latest", {
    convert: currency,
  });

export default {
  fetchCoins,
  cancelFetchCoins,
  latestHistory,
};
