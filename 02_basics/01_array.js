/*
const myArray = [0,1,2,3,4,5];
console.log(myArray);
console.log("______________________________________")
// ARRAY METHODS
myArray.push(6);
//console.log(myArray);
console.log(myArray[2]);
myArray.pop();
console.log(myArray);

*/
const myArray = [0,1,2,3,4,5];
/* 
console.log(myArray.includes(9));
console.log(myArray.indexOf(9));
console.log(myArray.indexOf(4));

console.log(myArray);
const newArr = myArray.join();
console.log(newArr);


// SLICE AND SPLICE METHODS
console.log("A", myArray);
console.log("B",myArray.slice(1,4));
console.log(myArray);
console.log("C",myArray.splice(1,4));
console.log(myArray);
*/
//========================================================================================================================

const marvel_Heros = ["Spiderman", "Thor","Batman"];
const dc_heros =["flash"];

all_Heros = marvel_Heros.concat(dc_heros);
/*
console.log(all_Heros);
const new_All_Heros=all_Heros.join();

console.log(new_All_Heros);
*/

const new_All_Heros = [...marvel_Heros, ...dc_heros];
//console.log(new_All_Heros);

const another_array = [1,2,3,4,[5,6,[0,0],9],100];
const real_AnotherArray = another_array.flat(Infinity);
console.log(real_AnotherArray);

console.log(Array.from("GANESHBELOKAR"));
//console.log()

let score1= 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));