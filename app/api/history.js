import client from "./client";

const endpoint = "exchangerate/";

const gettingHistory = (crypto, currency, time_start, time_end) =>
  client.coinIO.get(endpoint + crypto + "/" + currency + "/history", {
    period_id: "1DAY",
    time_start: time_start,
    time_end: time_end,
  });

export default {
  gettingHistory,
};
