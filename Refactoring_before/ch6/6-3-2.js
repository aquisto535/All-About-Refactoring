//6.3 변수 추출하기

export class Order {
  #data
  constructor(aRecord) {
    this.#data= aRecord;
  }

  get quantity() {
    return this.#data.quantity;
  }
  get itemPrice() {
    return this.#data.itemPrice;
  }

  get price() {
    return  this.basePrice - this.Discout + this.shipping
  }

  get basePrice()
  {
    return this.quantity * this.itemPrice;
  }

  get Discout()
  {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  get shipping()
  {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }
}


