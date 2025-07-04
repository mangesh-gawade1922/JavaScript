//=========Async/Await==============
/**Async and await is built on top of promises to express asynchronous actions
 * 
 * Inside the function, the await keyword can be applied to any promise, which will defer the execution until the promise resolve.
 * 
 * A Function with the async keyword return a Promise
 * 
 * Functions with keyword async can perform asynchronous actions but still look synchronous
 * 
 * Async functions make the code more readable and are easier to handle than promises
 */


//Example without using asyn/await
let result = function(score) {
    return new Promise(function(resolve, reject) {
        console.log("Calculating result...")
        if(score > 50)
            resolve("Congratulation. You have passed");
        else
            reject("You have failed");
    })
}

let grade = function(response) {
    return new Promise(function(resolve, reject) {
        console.log("Calculating your grade");
        resolve("Your grade is A." + response)
    })
}
// result(80).then(response => {
//     console.log("Result received");
//     return grade(response)
// }).then(finalgrade => {
//     console.log(finalgrade)
// }).catch(err => {
//     console.log(err)
// })

async function calculateResult() {
    try {
        const response = await result(20)
        console.log("Result Received")
        const finalGrade = await grade(response)
        console.log(finalGrade)
    }catch(err){
        console.log(err)
    }
}

calculateResult();