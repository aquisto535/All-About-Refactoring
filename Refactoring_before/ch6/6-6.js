class person
{
  #lastname;
  #firstname;

  constructor(data)
  {
    this.#firstname = data.firstName;
    this.#lastname = data.lastName;
  }

  get lastName ()
  {
    return this.#lastname;
  }

  get firstName()
  {
    return this.#firstname;
  }

}

let defaultOwner = new person({ firstName: '마틴', lastName: '파울러' });

export function getDefaultOwner() {
  //return defaultOwner; //객체 자체를 반환하는 것은 위험!
  //return {...defaultOwner} //새로운 객체 생성(얕은 복사)
  return defaultOwner
}
