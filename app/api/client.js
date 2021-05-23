import { create } from "apisauce";
import axios from "axios";

const source = axios.CancelToken.source();

//Ajmal
//CoinIO
//"EF293836-D321-4AD6-8606-A7E93090E163",
//"34AFCD54-382D-4F0E-925A-2186B9C496FA",
//15A5119D-1905-4A94-B51B-9260282A7940
//FBBD7DDA-4A58-461D-A20E-96C2E778C98B
//B1DFA5C6-C16C-4AAA-B2B5-B79CB09F10DB

//dipak
//75DC83BE-7111-474A-85B3-38F24AAA381E

// dipak
//694E8AB2-DDD8-4BE4-959D-CAEC37EA3277
const coinIO = create({
  baseURL: "https://rest.coinapi.io/v1/",
  headers: {
    "X-CoinAPI-Key": "75DC83BE-7111-474A-85B3-38F24AAA381E",
  },
  cancelToken: source.token,
});

const coinGeko = create({
  baseURL: "https://api.coingecko.com/api/v3/",
});

const cancelRequest = () => source.cancel;

export default {
  coinIO,
  coinGeko,
  cancelRequest,
};
