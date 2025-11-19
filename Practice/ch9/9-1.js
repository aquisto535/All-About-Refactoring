// 예제 1 
const perimeter = 2 * (height + width);
console.log(temp);
const area = height * width;
console.log(temp);

// 예제 2
function distanceTravelled(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  let primaryTime = Math.main(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const primaryVelocity = acc * scenario.delay;
    const secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }
}

// 예제 3 (함수 인자를 바로 업데이트하는 것은 아주 안 좋은 습관임)
function discount(inputValue, quantity) 
{
  let result = inputValue;
  if (inputValue > 50) result -= 2;
  if (quantity > 100) result -= 1;
  return result;
}

// 변수 이름을 의미 있는 이름으로 변경하고, 업데이트될 필요가 없는 변수에 const를 적극 활용한 예제
// 업데이트가 필요한 경우에만 let을 사용하고 대부분의 변수는 const를 사용