var student = {
    name: "Chris",
    age: 24,
    studies: "Computer science"
}
//console.log(student.name + " is age of " + student.age + " and studies " + student.studies);

//Create object using new keyword
let student1 = new Object();
student1.name = "Lavanya",
student1.age = 19,
student1.subject = "Maths"

//console.log(student1.name + " is age of " + student1.age + " and studies " + student1.subject);

/*--- Create object using constructor ---*/
const stud = (name, age, subject) => {
    this.name = name;
    this.age = age;
    this.subject = subject;
}
let student3 = stud("Sharvari", 8, "English");
console.log(student3.name + " is age of " + student3.age + " and studies " + student3.subject);