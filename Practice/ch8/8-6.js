// 예제 1
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
let charge;


// 예제 2
function someFunc() {
  const result = availableResources.length === 0 
    ? createResource() 
    : availableResources.pop();

  // if (availableResources.length === 0)
  // {
  //   result = createResource();
  // }
  // else
  // {
  //   result = availableResources.pop();
  // }

  allocatedResources.push(result);
  return result;
}
