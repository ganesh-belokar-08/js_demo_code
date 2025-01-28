const student = {
    studentName : "Ganesh Belokar",
    studentRno : "52108",
    studentMarks : "438",
    studentBehaviour : "Good",
    studentRemarks : "Excellent"
}
console.log(student);

//Destructuring Oject
const {studentName : name} = student;
console.log(name);

const {studentBehaviour} = student
console.log(studentBehaviour);

const {studentRemarks} = student;
console.log(studentRemarks);