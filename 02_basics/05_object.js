// DESTRUCTURING OBJECTS
/*  The process of allocating different names to the keys which are there in our OBJECT
and also to Simply the way of accessing our Ojects data or it's Subdata is called as 
OBJECT DESTRUCTURING IN JS 
*/

const course ={
    courseName : "JavaScript",
    courseInstructor : "Hitesh Chaudhary",
    duration : "2 Days",
    price : "999"
}

const {courseInstructor} = course
console.log(courseInstructor);

const{courseName} = course
console.log(courseName);

// Destructuring Objects 

const {courseInstructor : instructor} = course
console.log(instructor);
