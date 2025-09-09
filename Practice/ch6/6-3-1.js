//6.3 변수 추출하기 변수를 선언하여 긴 코드 정리하기()
export function price(order) {
  
  const basePrice = order.quantity * order.itemPrice;
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);

  return basePrice - + discount + shipping;
}
