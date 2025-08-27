export function priceOrder(product, quantity, shippingMethod) 
{
  //1. 기존 코드
  //const basePrice = product.basePrice * quantity;

  // const discount =
  //   Math.max(quantity - product.discountThreshold, 0) *
  //   product.basePrice *
  //   product.discountRate;



  // const shippingPerCase =
  //   basePrice > shippingMethod.discountThreshold
  //     ? shippingMethod.discountedFee
  //     : shippingMethod.feePerCase;

  //const shippingCost = quantity * shippingPerCase;

  //--------------------------------------------------

  //2. 내가 수정한 코드 

  //기본 제품 가격
  //const basePrice = MakeBasePrice(product, quantity);

    //할인
  //const discount = CalcDiscount(product, quantity);

  //개별 배송비
  //const shippingCost = CalcshippingCost(basePrice,quantity ,shippingMethod);

  //const price = basePrice - discount + shippingCost;

  //--------------------------------------------------

  //3. 강의에서의 코드
  
  const basePrice = CalculateBasePrice(product, quantity);

  const discount = CalculateDiscount(product, quantity);

  const shippingCost = CalculateshippingCost(basePrice,quantity ,shippingMethod);

  //const price = basePrice - discount + shippingCost;

  return basePrice - discount + shippingCost;
}

//2. 내가 수정한 코드 
// function MakeBasePrice(product, quantity)
// {
//   const basePrice = product.basePrice * quantity;

//   return basePrice;

// }

// function CalcDiscount(product, quantity)
// {
//     const discount =
//     Math.max(quantity - product.discountThreshold, 0) *
//     product.basePrice *
//     product.discountRate;

//    return discount;
// }

// function CalcshippingCost(basePrice, quantity, shippingMethod)
// {
//     const shippingPerCase =
//     basePrice > shippingMethod.discountThreshold
//       ? shippingMethod.discountedFee
//       : shippingMethod.feePerCase;

//   const shippingCost = quantity * shippingPerCase;

//   return shippingCost;
// }

//3. 강의에서의 코드
function CalculateBasePrice(product, quantity)
{
  return product.basePrice * quantity;
}

function CalculateDiscount(product, quantity)
{
  return (Math.max(quantity - product.discountThreshold, 0) *
     product.basePrice *
     product.discountRate);
}

function CalculateshippingCost(basePrice, quantity, shippingMethod)
{
    const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  return quantity * shippingPerCase;
}



// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
