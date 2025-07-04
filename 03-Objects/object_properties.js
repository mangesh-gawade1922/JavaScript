var student = {
    name: "Chris",
    age: 25,
    studies: "Computer science"
}

//student.age = 28
//x = student.age
x = "age"
//console.log(student.name + " is age of " + student.age + " and studies " + student.studies);
//console.log(student.name + " is age of " + x + " and studies " + student.studies);
console.log(student.name + " is age of " + student[x] + " and studies " + student.studies);