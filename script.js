// JavaScript Lab 1 //

// Task 1   //
// function formatFullName(firstName, lastName) {
//     if (!firstName || !lastName) {
//         return "Invalid name input.";
//     }

//     firstName=
//         firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
//     lastName=
//         lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase ();

//         return lastName + ", " + firstName;
// }

// console.log(formatFullName("Tyler", "Stallworth"));


// Task 2       //
function calculateTotalCost(price, quantity, taxRate) {

    if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
        return "Invalid input";
    }

// 
let totalCost = (price * quantity) * (1 + taxRate);
return totalCost;
}

console.log(calculateTotalCost(15, 3, 0.08));
console.log(calculateTotalCost(7.5, 10, 0.07));
console.log(calculateTotalCost(12, 5, 0));
console.log(calculateTotalCost("ten", 2, 0.05));










//
