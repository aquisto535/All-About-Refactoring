import { getDefaultOwner } from './6-6.js';

const owner = getDefaultOwner();
owner.firstName = '엘리'; //한 번의 초기화로 객체 인스턴스 전체의 첫번째 인자의 값이 고정되어버림(객체의 첫번째 인자 메모리에 값을 대입했기 때문, 
                         //자바스크립트에서 객체는 참조 형태로 반환됨) -> 클래스로 만들면 이와 같은 방식으로는 변경 불가
console.log(owner);
console.log(getDefaultOwner());
