export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPriority() //한 곳에서만 기능을 담당해야!
  {
     return this.priority.higherThan('normal'); 
  }
}

class Priority //Priority가 Order 안에 넣어두는 것이 적절하지 않아 별도의 클래스 생성(정말 필요한 경우)
{
  #value;
  constructor(value)
  {
    if(Priority.legalValues().includes(value)) this.#value = value;
    else throw new Error(`${value} is invaild for Priority`);

    this.#value = value;
  }

  static legalValues()
  {
    return ['low', 'normal', 'high', 'rush'];
  }

  get #index()
  {
    return Priority.legalValues().indexOf(this.#value);
  }

  equals(other)
  {
    return this.#index === other.index;
  }

  higherThan(other)
  {
    return this.#index > other.index;
  }

}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter(
  //(o) => 'high' === o.priority || 'rush' === o.priority //객체의 변수 값을 인식해서 필터링하는 기능이 바깥에 존재함 -> 캡슐화 필요!
  (o) => o.isHighPriority()
).length;
