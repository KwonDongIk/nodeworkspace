//let {print, plus} = require('./06-01_module');

let testObj = require('./06-01_module');

testObj.print("Hello");
//console.log(plus(1,2));

let person = 
  {
    firstName : "John",
    lastName : "Doe",
    age : 37,
    email : "john@gamil.com",
    country : "USA"
  };


let {lastName, email} = person;
console.log(lastName, email);
console.log(person.lastName);

function getFullname({firstName, lastName}){
  console.log(`${firstName}, ${lastName}`);
}

getFullname(person);



// 2) Array
let scores = [100, 80, 20];

let [a, b, c] = scores;
console.log(a);
console.log(b);
console.log(c);
