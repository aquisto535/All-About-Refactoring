/*[값이 변할 수 있는 클래스 내의 파생 변수의 값을 실시간으로 계산할 수 있도록 질의 함수로 변경]*/
class Order {
// 예제 1
  // 다른 코드 있다고 가정(다른 곳에서도 해당 변수가 사용되고 있다고 가정)
  get discountedTotal() {
    return this._basePrice - this._discount; // Get하는 순간 필요한 값이 실시간으로 바로 계산되어 반환되도록 적용
  }
  // discount만을 Set했을 뿐인데 다른 필드도 업데이트를 진행하고 있음 -> 안 좋은 설계
  set discount(value)
  {
    this._discount = value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  // 계산된 값은 본래 get production()에서 실시간으로 계산되어 반환되어야 함
  applyAdjustment(adjustment)
  {
    this._adjustments.push(adjustment);
  }
}
