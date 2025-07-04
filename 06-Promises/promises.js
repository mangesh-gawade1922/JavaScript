//=========Why JavaScript Promises?==============
/**JavaScript is predominantly single threaded. This makes it slow and restrictive.
 * 
 * With the help of promises and other Asynchronous concepts, JavaScript can perform long network requests simultenously without blocking the main thred
 */


//=========What are JavaScript Promises?==============
/**JavaScript is predominantly single threaded. This makes it slow and restrictive.
 * 
 * 1. A promise is asynchronous action that may complete at some point in the future and produce a value
 * 2. It notifies the user when its value is available.
 * 3. Promises provide a robust way to wrap the result of asynchronous work, overcoming the problem of deeply nested callbacks.
 * 
 * States of Promises:
 * 1. Pending: The underlying operation has not yet completed
 * 2. Fulfilled: The operation has finished, and the promise is fulfilled with a value
 * 3. Rejected: An error has occured during the operation, and the promise is rejected with a reason
 * 
 * A promise is said to be settled when it is either fullfilled or rejected 
 * Once a promise is settled, it becomes immutable, and its state cannot be change
 * then(callback) - Used to attach a callback when the promise is resolved/fulfilled
 * catch(callback) - Used to attach a callback when the promise is rejected
 * 
 */
let car = new Promise(function(resolve, reject){
    fuel_tankfull = true;
    if(fuel_tankfull)
        resolve()
    else
        reject()
});

car.then(function() {
    console.log("The fuel tank is full. Happy Driving");
}).catch(function(){
    console.log("The fuel tank is not empty");
})


//=========Nested Promises?==============

let empty_tank = function() {
    return new Promise(function(resolve, reject) {
        resolve("The car doesn't have enough fuel.")
    });
}

let engine = function(msg) {
    return new Promise(function(resolve, reject) {
        resolve(msg + "The engine is over heating.")
    });
}

let travel = function(msg) {
    return new Promise(function(resolve, reject) {
        resolve(msg + "These car is not safe for travelling")
    });
}

empty_tank().then(function(result){
    return engine(result);
}).then(function(result){
    return travel(result);
}).then(function(result){
    console.log("Done!" + result);
})

