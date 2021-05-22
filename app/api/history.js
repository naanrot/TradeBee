import client from "./client";

const endpoint = "exchangerate/";

const fetchHistory = (crypto, currency, time_start, time_end) =>
  client.coinIO.get(endpoint + crypto + "/" + currency + "/history", {
    period_id: "1DAY",
    time_start: time_start,
    time_end: time_end,
  });

export default {
  fetchHistory,
};
