//기존 코드 -> 바로 객체 변수에 접근 가능하도록 허용
// const organization = { name: 'Acme Gooseberries', country: 'GB' };

// organization.name = 'Dream Coding';
// console.log(organization.name);
// console.log(organization.country);

class organization
{
    #name;
    #country;
    #data;

    constructor(data)
    {
        this.#data = data;
        this.#name = data.name;
        this.#country = data.country;
    }

    get name()
    {
        return this.#name;
    }

    set name(value)
    {
        this.#name = value;
    }

    get country()
    {
        return this.#country;
    }

    set country(value)
    {
        this.#country = value;
    }

    //set 함수가 없는 경우 사용가능
    // get rawData()
    // {
    //     return {...this.#data}; //기존의 데이터를 새로 만들어서 반환. 얕은 복사, clonedeep
    // }

    //set 함수가 있는 경우  
    get rawData()
    {
        return {name: this.name, country : this.country }
    }


}

//const organization1 = new Organization('Acme Gooseberries', 'GB');

// const organization = new Organization({
//   name: 'Acme Gooseberries',
//   country: 'GB',
// });

organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);



