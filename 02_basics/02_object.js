// SYMBOL AS A KEY
/* Whenever we have to use the Symbol as a Key then we have to define it in the object with the 
help of a SQUARE BRACKETS

cons mySym1 = Symbol(key1);

const myObj= {
      name:"Ganesh Belokar",
      [mySym1] : mykey1
}

console.log(myObj.name);
console.log(myObje["name"]);

console.log(myObj[mySym1]);
*/

// OBJECT LITEREALS
let key1 = 100;
let key2 = 200;

const mySym1 = Symbol(key1);
const mySym2 = Symbol(key2);
// USING SYMBOLS IN OBJECT
const student={
    name:"Ganesh Belokar",
    "fullname":"Ganesh Murlidhar Belokar",
    age :22,
    isLoggedIn: false,
    location: "Pune, Maharashtra",
    [mySym1] : "myKey1",
    [mySym2] : "myKey2",
    email : "ganesh@adcs.com"
}

//console.log(student.name);
//console.log(student["name"]);
//console.log(student.fullname);  ERROR
//console.log(student["fullname"]);

//console.log(student.mySym1);    ERROR
//console.log(student.mySym1);
//console.log(student[mySym1]);
//console.log(student);

//Freezing the USER
//Object.freeze(student);

student.email= "ganesh@mcoe.com";
// console.log(student);

student.greeting = function() {
    console.log("Hello, I m Ganesh Here....");
    console.log("______________________________________________")
    console.log(`Hello Students, ${this.name} here and i am ${this.age} years old.` );

}

console.log(student.greeting);
console.log(student.greeting());




