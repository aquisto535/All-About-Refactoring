import _ from 'lodash'
import { taxableCharge } from './6-9-client2';

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function enrichReading(original)
{
  ///const result = {...original} //Object.assign: 얕은 복사

  const result = _.cloneDeep(original);
  result.baseCharge = caculateBaseCharge(result);
  result.taxableCharge = Math.max(0, result.baseCharge - taxThereshold(result.year));

  return result;
}

function caculateBaseCharge(reading)
{
  return baseRate(reading.month, reading.year) * reading.quantity;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
