
const student ={
    rno:52108,
    fullname : {
        name :{
            firstname : "Ganesh",
            lastname : "Belokar"
        }

    }
}

//console.log(student);
console.log(student.fullname.name.firstname);
console.log(student.fullname.name.lastname);

const obj1 = { 
    1: 'a',
    2: 'b'
}
const obj2={
    3 : 'c',
    4 : 'd'
}

// First Way
//const obj3 = {obj1 , obj2}
//console.log(obj3);

//Second Way
//const obj3 = Object.assign(obj1, obj2);
//console.log(obj3);
//const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj3 = {
    5 : 'e',
    6 : 'f'
}
const obj4={
    7 : 'g',
    8 : 'h'
}

const obj5 = Object.assign({},obj1,obj2,obj3,obj4);
console.log(obj5);