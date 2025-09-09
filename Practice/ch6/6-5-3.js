//6.10 함수 선언 바꾸기(인자는 필요로 하는 것만 가져오기 => 재사용성이 높아짐)
export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
