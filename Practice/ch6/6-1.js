/*
가독성이 안 좋음(한 화면에 다 나오지 않음) -> 함수의 기능을 파악하기 어려움 
=> 6.1 함수 추출하기(기능별로 함수를 나눔)
*/

//4개의 함수로 나눔
export function printOwing(invoice)
 {
  
  printBanner(); 
  
  let outstanding = caculateOutstanding(invoice);

  recordDueDate(invoice);

  printDetails(invoice, outstanding);

}

function printBanner()
{
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
} 

function caculateOutstanding(invoice)
{
  return invoice.orders.reduce((sum, order) => (sum += order.amount), 0) //함수형으로 수정

  let result = 0;
  for (const o of invoice.orders)
  {
     result+= o.amount;
  }

  return result;
}

function recordDueDate(invoice)
{
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding)
{
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
