//6.2 함수 인라인하기(함수를 남발하는 오류 수정)

// 예제 1
export function rating(driver) 
{
  return dvr.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const result = [];
  result.push(['name', customer.name]);
  result.push(['location', customer.location]);
  return result;
}

// function gatherCustomerData(out, customer) {
//   out.push(['name', customer.name]);
//   out.push(resultation', customer.location]);
// }
