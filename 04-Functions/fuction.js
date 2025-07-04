function My_function(val) {
    return val*val;
}

//console.log(My_function(5));


//=========Function expression==============
/**A javascript function can also be defined using an expression
 * A function expression can be stored in a variable
 */
let x = function My_function1(val) {
    return "Hello";
}

//console.log(x());

//=========Function Constructor==============
/**Javascript functions are defined using the keyword function.
 * Functions can also be defined using the built-in JavaScript function constructor called Function()
 */

var myFunction = new Function("a", "b", "return a + b");
var y = myFunction(2, 3);

//console.log(y);


//=========Self Invoking Function==============
/**A self-invoking expression is invoked(started) automatically, without being called.
 * Functions expressions will execute automatically if the expression is followed by ()
 * You have to add parentheses around the function to indicate that it is a function expression.
 */
(function () {
  //console.log("Hello world");  // I will invoke myself
})();


//=========Functions as values==============
/**In Javascript, a function is a value, so we can deal with it as a value.
 * We first define the function and then assign it to a variable unlike in expressions
 */

function product(a, b) {
    return a*b;
}

//let z = product(2, 5);

let xz = product(2, 5)*5;
//console.log(xz);

//=========Functions as objects==============
/**Javascript functions are a special type of objects, called function objects.
 * A function object includes a string which holds the actual code i.e the function body of the function
 */
var body = "return Math.PI * rad * rad";
var circle = new Function("rad", body);
//console.log(circle(5));


//=========Arrow Functions==============
/**Functions can be written more compactly with the help of Arrow functions
 * Arrow function expressions are ill suited as methods and they cannot be used as constructors
 */
const MyFunc = (a,b,c) => {return a*b*c}
let multiplication = MyFunc(2,4,6)

//console.log(multiplication);


//=========Generator Functions==============
/**Regular functions return only one, single value(or nothing)
 * Generators can return ("yield") multiple values, one after another, on-demand
 * To create a generator, we use the syntax: function*
 */
function* generateFunc() {
    yield 1;
    yield 2;
    return 3;
}

let var1 = generateFunc();
let one = var1.next();
let two = var1.next();
let three = var1.next();
console.log(JSON.stringify(one)); 
console.log(JSON.stringify(two));
console.log(JSON.stringify(three));