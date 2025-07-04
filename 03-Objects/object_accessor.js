//Getter
// let car = {
//     model: "BMW",
//     color: "Navy Blue",
//     fuel_type: "Diesel",
//     get fuel() {
//         return this.fuel_type;
//     }
// }

//console.log(car.fuel);

//Setter
let car2 = {
    model: "Audi",
    color: "Yellow",
    fuel_type: "",
    set fuel(fuel) {
        this.fuel_type = fuel;
    }
}

car2.fuel = "Petrol";
console.log(car2.fuel_type);