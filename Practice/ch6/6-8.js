//6.8 매개변수 객체 만들기
export function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => !range.contains(r.temp));
}

// 데이터를 담고 있는 객체와 그 데이터를 처리하는 로직을 한 클래스에 모음
export class NumberRange
{
  #min;
  #max;

  constructor(min, max)
  {
    this.#min = min;
    this.#max = max;
  }

  get min()
  {
    return this.#min;
  }

  get max()
  {
    return this.#max;
  }

  contains(number)
  {
    return number >= this.#min && number <= this.#max;
  }

}

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

//순수 데이터 객체
const operationPlan = new NumberRange(51, 53);

const result = readingsOutsideRange(
  station,
 operationPlan
);

console.log(result);
