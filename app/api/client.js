import { create } from "apisauce";
import axios from "axios";

const source = axios.CancelToken.source();

//eacheajmal key
//"EF293836-D321-4AD6-8606-A7E93090E163",

//ajuueache key
//"34AFCD54-382D-4F0E-925A-2186B9C496FA",

const coinIO = create({
  baseURL: "https://rest.coinapi.io/v1/",
  headers: {
    "X-CoinAPI-Key": "EF293836-D321-4AD6-8606-A7E93090E163",
  },
  cancelToken: source.token,
});

const coinGeko = create({
  baseURL: "https://api.coingecko.com/api/v3/",
});

const cancelRequest = () => source.cancel;

export default {
  coinIO,
  coinMarketCap,
  coinGeko,
  cancelRequest,
};
