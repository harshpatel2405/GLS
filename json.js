/*
const user = {
  name: "harsh",
  age: 21,
  contactNo: 6543287654,
};

console.log(user);
console.log(user.name);

function checkAge(user) {
  return user.age ? "true" : "false";
}

console.log(checkAge(user));
*/
// array of json
/*
users = [
  { name: "Yug", age: 18, marks: 34, grade: "D" },
  { name: "Pratham", age: 18, marks: 23, grade: "E" },
  { name: "Honey", age: 19, marks: 45, grade: "C" },
  { name: "Chahat", age: 18, marks: 7, grade: "F" },
];

let sum = 0;
console.log(users);
console.log(users[0]);
console.log(users[1].name);
for (let i = 0; i < 4; i++) {
  sum += users[i].marks;
}
console.log(sum);
*/
/*
 * Task 1 : make a json for employee and print all the details of employees
 * Task 2 : make a json array for employees and print sum of salary and also print employee within highest age
 */

// nested json
const user = {
  name: "ram",
  age: 10000000,
  accountNumber: 12323,
  address: {
    houseNumber: 23,
    landmark: "near lakshman room",
    area: "avadh",
    state: "ram rajya",
    country: "akhand Bharat",
  },
};

console.log(user);
console.log(user.name);
console.log(user.address);
console.log(user.address.country);

// json string to obj
let str = '{"name": "lakshman","designation":"ram ke bhai"}';
console.log(typeof(str))
let obj = JSON.parse(str)
console.log(typeof(obj))

console.log(obj)
console.log(obj.name)
console.log(obj.designation)
