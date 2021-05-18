class CoinRepo {
  private dataStore = new Map();

  private generateKey(type: String, currency: String) {
    return type + "/" + currency;
  }

  store(type: String, currency: String, data: Object) {
    console.log(
      "Key is " + this.generateKey(type, currency) + " and data is " + data
    );
    this.dataStore.set(this.generateKey(type, currency), data);
  }

  get(type: String, currency: String) {
    return this.dataStore.get(this.generateKey(type, currency));
  }
}

export default CoinRepo;
