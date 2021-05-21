const { default: CoinRepo } = require("./coinRepo");

const repo = new CoinRepo();

module.exports = {
  coinRepo: repo,
};
