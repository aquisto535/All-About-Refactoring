function foundPerson(people)
 {
  const candidate = ['Don', 'John', 'Kent'];
  return people.find((p) => candidate.includes(p)) || ''; //알고리즘 교체
  // for (let i = 0; i < people.length; i++) 
  // {
  //   if (people[i] === 'Don') {
  //     return 'Don';
  //   }
  //   if (people[i] === 'John') {
  //     return 'John';
  //   }
  //   if (people[i] === 'Kent') {
  //     return 'Kent';
  //   }
  // }
  //return '';
}

console.log(foundPerson(['John']));
console.log(foundPerson(['Don', 'John']));
console.log(foundPerson(['Kent', 'Don', 'John']));
console.log(foundPerson(['Lisa', 'Don', 'Tom']));
