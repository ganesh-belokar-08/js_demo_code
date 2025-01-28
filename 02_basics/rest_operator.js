//REST OPERATOR
/* -
-They are mainly used when we have to store the multiple arguments which are being passed by
the user. 
-It mainly uses the ARRAY DS to store the Number of Values/arguments which are being passed to 
it.
-Strictly we need to add the REST OPERATOR at the End of Our Arguments.
-This logic is mainy used in the SHOPPING CARTS when we have to store the Prices of various items
which are being added by the user.
-Mainly to deal with the Huge amout of arguments at runtime.
-In function it behaved like REST & in ARRAY  it mainly behaved like SPREAD OPERATOR.
*/
// REST OPERATOR
function calculatePrice(...num1){
    return num1;
}
//console.log(calculatePrice(90, 900, 4500, 3400, 300, 20, 22));

//INTERVIEW SCENARIO'S
function calculatePrice(val1, val2, ...num1){
    return num1;
}
console.log(calculatePrice(200, 400, 33, 44, 55, 66, 77));


//ERROR 
//function calPrice(...num1,  val2, val3) return num1;}
//console.log(calculatePrice(2020, 4200, 3333, 4444, 5555, 6666, 7777));



const user={
    username : "Ganesh",
    price : 199
}
function handleObject( anyObject){
    console.log(`The Username is ${anyObject.username}, the price is ${anyObject.price}`);
}
handleObject(user);



/*
function calculatePrice(num1){
    return num1;
}

console.log(calculatePrice(90));
*/

/*
*/
