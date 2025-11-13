export function acquireData(input)
{
 return input
        .split('\n')
        .splice(1) //첫번째 라인 제거
        .filter(line => line.trim() !== '') //빈 라인 제거
        .map(line => line.split(',')) //각 라인을 배열로 변환
        .filter( (line) => line[1].trim() === 'India') //국가가 India인 것만 필터링
        .map( (line) => ({ city: line[0].trim(), phone: line[2].trim() }) ); //객체로 매핑
}

const input = `office, country, telephone\n
Chicago, USA, +1 312 373 1000\n
Beijing, China, +86 4008 900 505\n
Bangalore, India, +91 80 4064 9570\n
Porto Alegre, Brazil, +55 51 3079 3550\n
Chennai, India, +91 44 660 44766`;
const result = acquireData(input);
console.log(result);
