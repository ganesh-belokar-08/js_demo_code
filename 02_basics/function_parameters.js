/*
If we passed to anything to a fucntion with the String Argument. Then it will take that as a input.

BLANKSPACE => It will be carried as it is as a blankspace.
No argument => Then it will return mainly the UNDEFINED.

*/



/*
function callName (){
    console.log("GANESH");
}
//callName();

function add(num1, num2){
    console.log(num1+num2);
}
add(9,0);
*/

/*
function add(number1, number2){
    let result = number1+number2;
    console.log(result);
    return result;
}
add(99,99);
console.log(add(99,99));
*/

function justLoggedIn(username){
    if(username=== undefined){
        console.log("Please Enter a proper Username");
    }else{
        return `${username} just Logged in.`;
    }
    
}
console.log(justLoggedIn("Ganesh"));

function justLogOut(username){
    if(!username){
        console.log("Please Enter a proper Username");
    }else{
        return `${username} Logout.`;
    }
   
}
//console.log(justLogOut("GANESH"));
//console.log("_________________________________");
console.log(justLoggedIn());
console.log(justLoggedIn("BRAVO"));
console.log(justLogOut());


