//데이터를 리턴만 하고 쓰는 사람이 자신에게 필요한 데이터를 각각 계산하도록 만든다는 점에서 안 좋은 코드임
// const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

// export function acquireReading() {
//   return reading;
// }

// export function baseRate(month, year) {
//   if (year === 2017 && month === 5) return 0.1;
//   return 0.2;
// }



export class Reading
{
  #customer; //private 변수
  #quantity;
  #month;
  #year;

  constructor(data)
  {
    this.#customer = data.customer;
    this.#quantity = data.quantity;
    this.#month = data.month;
    this.#year = data.year;
  }

  get customer()
  {
    return this.#customer;
  }

  get quantity()
  {
    return this.#quantity;
  }

  get month()
  {
    return this.#month;
  }

  get year()
  {
    return this.#year;
  }

  get baseRate() {
  if (this.#year === 2017 && this.#month === 5) return 0.1;
  return 0.2;
  }

  get baseCharge()
  {
    return this.baseRate * this.quantity;
  }

  get taxThreshold()
  {
    return 0.1; 
  }

  get taxableCharge()
  {
    return Math.max(0, this.baseRate - this.taxThreshold );
  }

}

const reading = new Reading({ customer: 'ivan', quantity: 10, month: 5, year: 2017 });

export function acquireReading() {
  return reading;
}


