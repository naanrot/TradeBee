import React from "react";
import client from "./client";

const loadMetadata = (currency) =>
  client.coinMarketCap.get("cryptocurrency/info", {
    symbol: currency,
  });

export default loadMetadata;
