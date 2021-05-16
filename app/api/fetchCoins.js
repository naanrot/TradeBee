import apiClient from "./client";

const endpoint = "exchangerate/"
const fetchCoins = (baseId) => apiClient.get(endpoint + baseId)

export default {
    fetchCoins
}