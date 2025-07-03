let start = 'Hello World';
//console.log(start);

let cars = ['bmw', 'volvo', 'mercedeze'];
//console.log(cars);

let firstElement = cars[0];
//console.log(firstElement);

let len = cars.length;
//console.log(len);

let lastElem = cars[cars.length - 1];
//console.log(lastElem);

/*================= Array Operations ==============*/
/*--- Foreach loop ---*/
//cars.forEach((item, index) => (console.log(item, index)));

/*============ Methods ====================*/
/*--- 01. toString() method(To convert in string) ---*/
//let outString = cars.toString();
//console.log(outString);

/*--- 02. pop() method(Removes last element from an array) ---*/
//let last1 = cars.pop();
//console.log(last1);

//let last2 =  cars[cars.length - 1];
//console.log(last2);

//console.log(cars[cars.length - 1]);

/*--- 03. Push() method(Add an element at the end of an array) ---*/
cars.push('Mahindra');
//console.log(cars);

/*--- 04. Shift() method(Remove the first element from an array) ---*/
cars.shift();
//console.log(cars);

/*--- 05. unShift() method(Add an element at the beginning of an array) ---*/
cars.unshift("Audi");
//console.log(cars);

/*--- 06. concat() method(Create a new array by merging existing arrays) ---*/
let bikes = ["yamaha", "tvs", "royal enfield"];
let vehicles = cars.concat(bikes);

//console.log(vehicles);

/*--- 07. sort() method(Sort an array in ascending order) ---*/
let sortElem = bikes.sort();
//console.log(sortElem);

vehicles.sort();
//console.log(vehicles);

/*--- 08. reverse() method(Reverse the elements of an array) ---*/
vehicles.reverse();
//console.log(vehicles);


/*============ Map, Reduce and Filters ====================*/
/*--- 01. The map() method(Create a new array and performs a function on each array element) ---*/

let number = [1, 2, 3, 4, 5, 6, 7, 8]
let number2 = number.map(multiply);

function multiply(value) {
    return value * 2;
}

//console.log(number2);


/*--- 02. Filter() method(Method takes each element in an array and it applies a conditional statement against it) ---*/
let num3 = number.filter(comp);

function comp(value) {
    return value > 4;
}

//console.log(num3);


/*--- 03. The reduce() method(Method reduces an array of values down to just one value using a function) ---*/
let num4 = number.reduce(sum);

function sum(total, value) {
    return total + value;
}

console.log(num4);