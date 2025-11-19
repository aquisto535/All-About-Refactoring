class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get country() {
    return this._country;
  }
  set country(value) {
    this._country = value;
  }
}
const organization = new Organization({
  name: '드림코딩',
  country: '대한민국',
});

// 클래스 안에 있는 필드나 이름은 매우 중요하기 때문에 의도나 값을 명확히 나타낼 수 있는 이름을 사용해야 한다.
