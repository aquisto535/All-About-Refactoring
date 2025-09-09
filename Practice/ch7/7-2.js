export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    //return this.#courses;
    return [...this.#courses]; //새로운 배열을 만듦
  }

  // set courses(courses) {
  //   this.#courses = courses;
  // }

  addCourse(course) {
    this.#courses.push(course);
  }

  removeCourse(course, runIfAbssent)
  {
    const index = this.#courses.indexOf(course);
    if(index === -1) 
    {
      runIfAbssent();
      return;
    };
    this.#courses.splice(index, 1);
  }

}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person('엘리');
//ellie.courses.push(new Course('리팩토링', true)); //내부 객체에 접근하도록 허용해버림
const course = new Course('리팩토링', true);
ellie.addCourse(course);
ellie.removeCourse(course, () => { console.log("해당 코스는 없다!")}); //콜백 함수 등록
ellie.removeCourse(course, () => { console.log("해당 코스는 없다!")});
console.log(ellie.courses.length);
