class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  //추가한 코드
  get basePrice() //임시 변수를 질의 함수로 바꿈
  {
    return this.#quantity * this.#item.price;
  }

  get discountFactor()
  {
    return basePrice > 1000 ? 0.95 : 0.98; 

  }

  get price() {
    // const basePrice = this.#quantity * this.#item.price;
    // const discountFactor = 0.98;
    // if (basePrice > 1000) discountFactor -= 0.03;
    // return basePrice * discountFactor;

    return this.basePrice * this.discountFactor;
  }
}
