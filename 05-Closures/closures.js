let a = 10; //This is a Global variable

function My_function() {
    let b = 20; //This is a local variable
    //console.log(a + b);
}
My_function();


//=========What is Closures?==============
/**Closures in JavaScript is a feature where an inner function has access to the outer function's variables.
 * A closure has three scope chains(Scope chain is a stack consisting of all the references to the variable for the function being executed)
 * 1. Has access to its own scope, i.e the variable defined within its curly braces
 * 2. Has access to the variables of the outer functions
 * 3. Has access to the global variables
 */

let x = 10;

function firstFunc() {
    let b = 20;
    function secondFunc() {
        let c = a + b;
        return c;
    }
    return secondFunc();
}
let sum = firstFunc();

console.log(sum);