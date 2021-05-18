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

//eacheajmal key
//"f71983a6-8169-4b07-8bb1-498875d48b27",

//ajuueache key
//"49e45d2b-efef-4121-8c39-0eaa709bfb69",

//dipak
//"d76be65c-bb10-4a7b-9b9e-bc8c014fa3e6"
const coinMarketCap = create({
  baseURL: "https://pro-api.coinmarketcap.com/v1/",
  headers: {
    "X-CMC_PRO_API_KEY": "d76be65c-bb10-4a7b-9b9e-bc8c014fa3e6",
  },
});

const cancelRequest = () => source.cancel;

export default {
  coinIO,
  coinMarketCap,
  cancelRequest,
};
